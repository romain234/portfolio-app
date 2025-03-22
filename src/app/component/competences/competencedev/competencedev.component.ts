import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competencedev',
  templateUrl: './competencedev.component.html',
  styleUrl: './competencedev.component.css'
})
export class CompetencedevComponent {

  constructor(private router: Router){ }

  goToProjects($myParam: number): void {
    const navigationDetails: string[] = ['/projets'];
    tabParam2=$myParam;
  
    this.router.navigate(navigationDetails)
  }
}
export let tabParam2:number;
