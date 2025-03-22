import { Component } from '@angular/core';
import { projetListMontage } from '../../../mock-projet';
import { Projet } from '../../../project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectmontage',
  templateUrl: './projectmontage.component.html',
  styleUrl: './projectmontage.component.css'
})
export class ProjectmontageComponent {

  projetListMontage=projetListMontage;

  constructor(private router: Router){}

  goToProjet(projet: Projet){
    this.router.navigate(['/projets', projet.id])
  }

}


