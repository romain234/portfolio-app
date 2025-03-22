import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competencemontage',
  templateUrl: './competencemontage.component.html',
  styleUrl: './competencemontage.component.css'
})
export class CompetencemontageComponent {

  constructor(private router: Router){ }

  goToProjects($myParam: number): void {
    const navigationDetails: string[] = ['/projets'];
    tabParam4=$myParam;
  
    this.router.navigate(navigationDetails)
  }
}
export let tabParam4:number;
