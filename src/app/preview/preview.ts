import {
  AfterViewInit,
  Component,
  ElementRef,
  effect,
  inject,
  signal,
  viewChild,
  viewChildren
} from '@angular/core';

import { Pdf } from '../pdf';

@Component({
  selector: 'app-preview',
  standalone: true,
  templateUrl: './preview.html',
  styleUrl: './preview.scss'
})
export class Preview implements AfterViewInit {

  readonly canvases = viewChildren<ElementRef<HTMLCanvasElement>>('canvas');
  readonly pdfContainer = viewChild.required<ElementRef<HTMLDivElement>>('pdfContainer');

  private readonly pdfService = inject(Pdf);

  readonly pages = signal<number[]>([]);
  readonly isLoaded = signal(false);

  constructor() {
    effect(async () => {
      const canvases = this.canvases();

      if (!this.isLoaded() || canvases.length === 0) {
        return;
      }

      const width = this.pdfContainer().nativeElement.clientWidth;

      await Promise.all(
        canvases.map((ref, i) =>
          this.pdfService.renderPage(i + 1, ref.nativeElement, width)
        )
      );
    });
  }

  async ngAfterViewInit(): Promise<void> {

    const file = history.state.file as File | undefined;

    if (!file) {
      console.error('No PDF received.');
      return;
    }

    try {

      await this.pdfService.loadPdf(file);

      this.pages.set(
        Array.from({ length: this.pdfService.totalPages }, (_, i) => i + 1)
      );

      this.isLoaded.set(true);

    } catch (error) {
      console.error('Failed to load PDF', error);
    }
  }
}
