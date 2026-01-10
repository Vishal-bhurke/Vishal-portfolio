import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Header } from './components/header/header';
import { filter } from 'rxjs/operators';
import * as AOS from 'aos';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  title = 'vishal-portfolio';
  cursorX = 0;
  cursorY = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    // Track Angular route changes for Google Analytics
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          if (typeof gtag !== 'undefined') {
            gtag('config', 'G-VHJTF4GGVK', {
              page_path: event.urlAfterRedirects
            });
          }
        });
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true
      });

      // Mouse events
      window.addEventListener('mousemove', (e) => {
        this.cursorX = e.clientX;
        this.cursorY = e.clientY;
        this.updateCursor();
      });

      // Touch events for mobile
      window.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
          this.cursorX = e.touches[0].clientX;
          this.cursorY = e.touches[0].clientY;
          this.updateCursor();
        }
      });

      window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          this.cursorX = e.touches[0].clientX;
          this.cursorY = e.touches[0].clientY;
          this.updateCursor();
        }
      });

      window.addEventListener('touchend', () => {
        // Keep cursor at last position after touch ends
      });
    }
  }

  updateCursor() {
    const dot = document.querySelector('.cursor-dot') as HTMLElement;
    const ring = document.querySelector('.cursor-ring') as HTMLElement;

    if (dot && ring) {
      dot.style.transform = `translate(${this.cursorX}px, ${this.cursorY}px)`;

      // Add slight delay/easing logic for ring if desired, simplified here
      setTimeout(() => {
        ring.style.transform = `translate(${this.cursorX}px, ${this.cursorY}px)`;
      }, 50);
    }
  }
}
