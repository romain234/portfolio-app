import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ProjectpageComponent } from './component/projets/projectpage/projectpage.component';
import { ProjectnavComponent } from './component/projets/projectnav/projectnav.component';
import { ProjectdevComponent } from './component/projets/projectdev/projectdev.component';
import { ProjectmontageComponent } from './component/projets/projectmontage/projectmontage.component';
import { ProjectdesignComponent } from './component/projets/projectdesign/projectdesign.component';
import { Project3dComponent } from './component/projets/project3d/project3d.component';
import { Competence3dComponent } from './component/competences/competence3d/competence3d.component';
import { CompetencegraphismeComponent } from './component/competences/competencegraphisme/competencegraphisme.component';
import { CompetencedevComponent } from './component/competences/competencedev/competencedev.component';
import { CompetencemontageComponent } from './component/competences/competencemontage/competencemontage.component';
import { CompetencepageComponent } from './component/competences/competencepage/competencepage.component';
import { FooterComponent } from './component/footer/footer.component';
import { DetailProjetComponent } from './component/projets/detail-projet/detail-projet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjectpageComponent,
    ProjectnavComponent,
    ProjectdevComponent,
    ProjectmontageComponent,
    ProjectdesignComponent,
    Project3dComponent,
    Competence3dComponent,
    CompetencegraphismeComponent,
    CompetencedevComponent,
    CompetencemontageComponent,
    CompetencepageComponent,
    FooterComponent,
    DetailProjetComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
