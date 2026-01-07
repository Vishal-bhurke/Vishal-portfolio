import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  constructor(private router: Router) { }

  viewProjectDetails(projectId: string) {
    this.router.navigate(['/project', projectId]);
  }
}
