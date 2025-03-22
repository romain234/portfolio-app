import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competencegraphisme',
  templateUrl: './competencegraphisme.component.html',
  styleUrl: './competencegraphisme.component.css'
})
export class CompetencegraphismeComponent {

  constructor(private router: Router){ }

  goToProjects($myParam: number): void {
    const navigationDetails: string[] = ['/projets'];
    tabParam3=$myParam;
  
    this.router.navigate(navigationDetails)
  }
}
export let tabParam3:number;
