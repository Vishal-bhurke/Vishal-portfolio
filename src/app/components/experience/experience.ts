import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  activeJob = 0;

  toggleJob(index: number) {
    if (this.activeJob === index) {
      this.activeJob = -1; // Close if clicked again
    } else {
      this.activeJob = index;
    }
  }
}
