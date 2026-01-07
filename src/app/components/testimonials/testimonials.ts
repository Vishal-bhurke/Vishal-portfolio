import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials implements OnInit, OnDestroy {
  currentSlide = 0;
  totalSlides = 3;
  private autoPlayInterval: any;
  private autoPlayDelay = 5000; // 5 seconds

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  pauseAutoPlay() {
    this.stopAutoPlay();
  }

  resumeAutoPlay() {
    this.startAutoPlay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    // Restart auto-play timer when user manually clicks
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
