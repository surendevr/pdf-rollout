import { Component, signal } from '@angular/core';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-pdf-to-word',
  imports: [Footer],
  templateUrl: './pdf-to-word.html',
  styleUrl: '../merge-pdf/merge-pdf.scss',
})
export class PdfToWord {
  toolName = signal('PDF to Word');
  toolDescription = signal('Convert your PDF documents to editable Word files. Preserve formatting, text, and images with high accuracy.');
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
