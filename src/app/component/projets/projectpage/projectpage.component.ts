import { Component, OnInit } from '@angular/core';
import { PROJETS } from '../../../mock-projet';
import { Projet } from '../../../project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrl: './projectpage.component.css',
  
})

export class ProjectpageComponent {
  projetsList: Projet[] = PROJETS;
onActivate: any;

  constructor(private router: Router){}

  goToProjet(projet: Projet){
    this.router.navigate(['/projets', projet.id])
  }

}


