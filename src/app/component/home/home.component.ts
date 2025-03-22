import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private router: Router){ }


  goToProjects($myParam: string = ''): void {
    const navigationDetails: string[] = ['/projets'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails)
  }

  
  afficherPlus($Param:number) {
    let competences= document.getElementById("pageCompetences");
    competences!.classList.remove("hide");
    const navigationDetails: string[] = ['/competences'];
    this.router.navigate(navigationDetails);
    index22 = $Param;    
  }

  ngOnInit(): void {
    if (this.router.url =='/competences') {
      let competences= document.getElementById("pageCompetences");
      competences!.classList.remove("hide");
    }
  }
}

export let index22:number;
