import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail implements OnInit {
  projectId: string = '';
  projectType: 'bms' | 'equip' = 'bms';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params['id'];
    this.projectType = this.projectId as 'bms' | 'equip';
  }

  goBack() {
    this.location.back();
  }
}
