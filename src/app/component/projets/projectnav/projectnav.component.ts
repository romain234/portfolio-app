import { Component, OnInit } from '@angular/core';
import { tabParam1 } from '../../competences/competence3d/competence3d.component';
import { tabParam2 } from '../../competences/competencedev/competencedev.component';
import { tabParam3 } from '../../competences/competencegraphisme/competencegraphisme.component';
import { tabParam4 } from '../../competences/competencemontage/competencemontage.component';



@Component({
  selector: 'app-projectnav',
  templateUrl: './projectnav.component.html',
  styleUrl: './projectnav.component.css'
})
export class ProjectnavComponent implements OnInit {
  tab: number = tabParam1;

  ngOnInit(): void {

  if(tabParam1==2)
    this.tab = tabParam1;
    this.changetab(this.tab);
  if(tabParam2==3)
    this.tab= tabParam2;
    this.changetab(this.tab);
  if(tabParam3==4)
    this.tab= tabParam3;
    this.changetab(this.tab);
  if(tabParam4==5)
    this.tab= tabParam4;
    this.changetab(this.tab);
  }

  changetab(x :number){
    this.tab= x;
  }   
}
