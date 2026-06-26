import { AfterViewInit, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, AfterViewInit {


  headerTitle= signal('PDF Rollout');

  ngOnInit(): void {
   
    this.headerTitle.set('PDF Rollout on init');
  }

  ngAfterViewInit(): void {
    this.headerTitle.set('PDF Rollout after view init');
  }
}
