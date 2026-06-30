import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PDFTool {
  id: string;
  name: string;
  description: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-tools-grid',
  imports: [CommonModule],
  templateUrl: './tools-grid.html',
  styleUrl: './tools-grid.scss',
})
export class ToolsGrid {
  tools = signal<PDFTool[]>([
    {
      id: 'merge',
      name: 'Merge PDF',
      description: 'Combine multiple PDFs into one document',
      route: '/merge-pdf',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      id: 'split',
      name: 'Split PDF',
      description: 'Extract pages or split into multiple files',
      route: '/split-pdf',
      icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5'
    },
    {
      id: 'compress',
      name: 'Compress PDF',
      description: 'Reduce file size while maintaining quality',
      route: '/compress-pdf',
      icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
    },
    {
      id: 'pdf-to-word',
      name: 'PDF to Word',
      description: 'Convert PDF to editable Word document',
      route: '/pdf-to-word',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      id: 'pdf-to-excel',
      name: 'PDF to Excel',
      description: 'Extract data into Excel spreadsheet',
      route: '/pdf-to-excel',
      icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
    },
    {
      id: 'pdf-to-ppt',
      name: 'PDF to PowerPoint',
      description: 'Convert PDF to PowerPoint presentation',
      route: '/pdf-to-ppt',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
    }
  ]);
}
