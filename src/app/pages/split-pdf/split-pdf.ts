import { Component, signal } from '@angular/core';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-split-pdf',
  imports: [Footer],
  templateUrl: './split-pdf.html',
  styleUrl: '../merge-pdf/merge-pdf.scss',
})
export class SplitPdf {
  toolName = signal('Split PDF');
  toolDescription = signal('Extract pages from your PDF or split your document into multiple files. Select specific pages or ranges to create separate PDFs.');
  isDragOver = signal(false);

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver.set(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver.set(false);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver.set(false);
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      // Handle file selection
    }
  }
}
