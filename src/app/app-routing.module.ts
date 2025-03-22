import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProjectnavComponent } from './component/projets/projectnav/projectnav.component';
import { DetailProjetComponent } from './component/projets/detail-projet/detail-projet.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'projets', component: ProjectnavComponent},
  {path: 'projets/:id', component: DetailProjetComponent},
  {path: 'competences', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
