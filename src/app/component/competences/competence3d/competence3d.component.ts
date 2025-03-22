import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competence3d',
  templateUrl: './competence3d.component.html',
  styleUrl: './competence3d.component.css'
})
export class Competence3dComponent {
  
  constructor(private router: Router){ }

  goToProjects($myParam: number): void {
    const navigationDetails: string[] = ['/projets'];
    tabParam1=$myParam;
  
    this.router.navigate(navigationDetails)
  }
}
export let tabParam1:number;
