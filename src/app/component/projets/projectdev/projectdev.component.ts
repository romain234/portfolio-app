import { Component } from '@angular/core';
import { projetListDev } from '../../../mock-projet';
import { Router } from '@angular/router';
import { Projet } from '../../../project';

@Component({
  selector: 'app-projectdev',
  templateUrl: './projectdev.component.html',
  styleUrl: './projectdev.component.css'
})
export class ProjectdevComponent {

  projetListDev=projetListDev;

  constructor(private router: Router){}

  goToProjet(projet: Projet){
    this.router.navigate(['/projets', projet.id])
  }

}
