import { Component, signal } from '@angular/core';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-pdf-to-excel',
  standalone: true,
  imports: [Footer],
  templateUrl: './pdf-to-excel.html',
  styleUrl: '../merge-pdf/merge-pdf.scss',
})
export class PdfToExcel {
  toolName = signal('PDF to Excel');
  toolDescription = signal('Extract tables and data from PDF documents into Excel spreadsheets. Perfect for working with tabular data and reports.');
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
