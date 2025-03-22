import { Component } from '@angular/core';
import { projetListDesign } from '../../../mock-projet';
import { Router } from '@angular/router';
import { Projet } from '../../../project';

@Component({
  selector: 'app-projectdesign',
  templateUrl: './projectdesign.component.html',
  styleUrl: './projectdesign.component.css'
})
export class ProjectdesignComponent {

  projetListDesign=projetListDesign;

  constructor(private router: Router){}

  goToProjet(projet: Projet){
    this.router.navigate(['/projets', projet.id])
  }

}
