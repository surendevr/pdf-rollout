import { Injectable } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';


@Injectable({
  providedIn: 'root'
})
export class Pdf {

  private pdfDocument: PDFDocumentProxy | null = null;

  constructor() {
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.mjs',
      import.meta.url
    ).href;
  }

  async loadPdf(file: File): Promise<void> {
    const bytes = new Uint8Array(await file.arrayBuffer());

    this.pdfDocument = await pdfjsLib.getDocument({
      data: bytes
    }).promise;
  }

  get totalPages(): number {
    return this.pdfDocument?.numPages ?? 0;
  }

  async renderPage(
    pageNumber: number,
    canvas: HTMLCanvasElement,
    containerWidth: number
  ): Promise<void> {
    if (!this.pdfDocument) {
      throw new Error('No PDF loaded.');
    }

    const page = await this.pdfDocument.getPage(pageNumber);

    const naturalViewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / naturalViewport.width;

    const viewport = page.getViewport({ scale });

    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Canvas context not available.');
    }

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
      canvas,
      canvasContext: context,
      viewport
    }).promise;
  }
}
