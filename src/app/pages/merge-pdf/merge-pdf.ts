import { Component, signal } from '@angular/core';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-merge-pdf',
  standalone: true,
  imports: [Footer],
  templateUrl: './merge-pdf.html',
  styleUrl: './merge-pdf.scss',
})
export class MergePdf {
  toolName = signal('Merge PDF');
  toolDescription = signal('Combine multiple PDF files into one document. Simply upload your PDFs and merge them in any order you want.');
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
    // Handle file drop - implementation would go here
  }
  
  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      // Handle file selection - implementation would go here
    }
  }
}
