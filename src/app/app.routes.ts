import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MergePdf } from './pages/merge-pdf/merge-pdf';
import { SplitPdf } from './pages/split-pdf/split-pdf';
import { CompressPdf } from './pages/compress-pdf/compress-pdf';
import { PdfToWord } from './pages/pdf-to-word/pdf-to-word';
import { PdfToExcel } from './pages/pdf-to-excel/pdf-to-excel';
import { PdfToPpt } from './pages/pdf-to-ppt/pdf-to-ppt';
import { FileGround } from './pages/file-ground/file-ground';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'merge-pdf',
    component: MergePdf,
  },
  {
    path:'align',
    component: FileGround
  },
  {
    path: 'split-pdf',
    component: SplitPdf
  },
  {
    path: 'compress-pdf',
    component: CompressPdf
  },
  {
    path: 'pdf-to-word',
    component: PdfToWord
  },
  {
    path: 'pdf-to-excel',
    component: PdfToExcel
  },
  {
    path: 'pdf-to-ppt',
    component: PdfToPpt
  },
  {
    path: '**',
    redirectTo: ''
  }
];
