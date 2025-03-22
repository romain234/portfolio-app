import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { index22 } from '../../home/home.component';
import { elementAt } from 'rxjs';


@Component({
  selector: 'app-competencepage',
  templateUrl: './competencepage.component.html',
  styleUrl: './competencepage.component.css'
})
export class CompetencepageComponent{

  constructor(private route: ActivatedRoute, private router: Router){
    router.events.subscribe(() => {

    const nav1 =document.getElementById('nav1');
    const nav2 =document.getElementById('nav2');
    const nav3 =document.getElementById('nav3');
    const nav4 =document.getElementById('nav4');
    
    let domaine = this.route.snapshot.paramMap.get("domaine");
    this.tab = index22;

    let active=document.getElementById("nav"+index22);
    if (active) {
      nav1!.classList.remove('active');
      nav2!.classList.remove('active');
      nav3!.classList.remove('active');
      nav4!.classList.remove('active');

      active!.classList.add("active");
    }
    });
  }

  goToProjects($myParam: number): void {
    const navigationDetails: string[] = ['/projets'];
    tabParam=$myParam;
  
    this.router.navigate(navigationDetails)
  }
  
  tab: number|undefined;

  changetab(x :number){
    const nav1 =document.getElementById('nav1');
    const nav2 =document.getElementById('nav2');
    const nav3 =document.getElementById('nav3');
    const nav4 =document.getElementById('nav4');

    nav1!.classList.remove('active');
    nav2!.classList.remove('active');
    nav3!.classList.remove('active');
    nav4!.classList.remove('active');

    this.tab= x;
    let active=document.getElementById("nav"+this.tab);
    active!.classList.add("active");
  }
  
  
}
export let tabParam:number;