import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { ToolsGrid } from '../../tools-grid/tools-grid';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, ToolsGrid, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  
}
