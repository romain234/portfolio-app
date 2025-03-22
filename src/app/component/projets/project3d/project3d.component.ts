import { Component, OnInit } from '@angular/core';
import { projetList3D } from '../../../mock-projet';
import { Router } from '@angular/router';
import { Projet } from '../../../project';

@Component({
  selector: 'app-project3d',
  templateUrl: './project3d.component.html',
  styleUrl: './project3d.component.css'
})
export class Project3dComponent {

  projetList3D= projetList3D;

  constructor(private router: Router){}

  goToProjet(projet: Projet){
    this.router.navigate(['/projets', projet.id])
  }

}
