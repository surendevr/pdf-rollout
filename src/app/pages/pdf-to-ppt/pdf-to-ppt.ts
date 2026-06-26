import { Component, signal } from '@angular/core';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-pdf-to-ppt',
  standalone: true,
  imports: [Footer],
  templateUrl: './pdf-to-ppt.html',
  styleUrl: '../merge-pdf/merge-pdf.scss',
})
export class PdfToPpt {
  toolName = signal('PDF to PowerPoint');
  toolDescription = signal('Convert PDF pages into editable PowerPoint slides. Perfect for creating presentations from PDF documents.');
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
