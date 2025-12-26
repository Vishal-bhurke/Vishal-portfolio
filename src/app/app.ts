import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Hero,
    About,
    Experience,
    Projects,
    Skills,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  title = 'vishal-portfolio';
  cursorX = 0;
  cursorY = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true
      });

      window.addEventListener('mousemove', (e) => {
        this.cursorX = e.clientX;
        this.cursorY = e.clientY;
        this.updateCursor();
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
        ring.style.transform = `translate(${this.cursorX - 20}px, ${this.cursorY - 20}px)`; // -20 for centering 40px ring
      }, 50);
    }
  }
}
