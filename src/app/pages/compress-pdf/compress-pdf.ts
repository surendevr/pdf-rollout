import { Component, signal } from '@angular/core';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-compress-pdf',
  standalone: true,
  imports: [Footer],
  templateUrl: './compress-pdf.html',
  styleUrl: '../merge-pdf/merge-pdf.scss',
})
export class CompressPdf {
  toolName = signal('Compress PDF');
  toolDescription = signal('Reduce your PDF file size while maintaining quality. Perfect for sharing files via email or uploading to websites.');
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
