import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PROJETS } from '../../../mock-projet';
import { Projet } from '../../../project';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.component.html',
  styleUrl: './detail-projet.component.css'
})
export class DetailProjetComponent implements OnInit {
  projetsList: Projet[] | undefined;
  projet: Projet|undefined;
  tab: number | undefined;

  constructor(private route: ActivatedRoute, private router: Router,private sanitizer: DomSanitizer  ){ }

  ngOnInit(){
      this.projetsList = PROJETS;
      const projetId: string|null = this.route.snapshot.paramMap.get("id");

      if(projetId){
        this.projet= this.projetsList.find(projet => projet.id == +projetId);
        if (this.projet) {
        this.safeDescription = this.sanitizer.bypassSecurityTrustHtml(this.projet.description);
        }
      }

      let tab = this.projet?.domaine;  
      if(this.projet?.domaine=="3D")
        this.tab = 1;
      if(this.projet?.domaine=="Dev")
        this.tab = 2;
      if(this.projet?.domaine=="Montage")
        this.tab = 3;
      if(this.projet?.domaine=="Design")
        this.tab = 4;
    }

    getSafeUrl(url: string): SafeResourceUrl {
      let videoId = '';
      
      if (url.includes('watch?v=')) {
        videoId = url.split('v=')[1].split('&')[0];
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1];
      } else if (url.includes('/shorts/')) {
        videoId = url.split('/shorts/')[1].split('?')[0];
      }
      
      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      }
      return this.sanitizer.bypassSecurityTrustResourceUrl('');
    }

    goToProjetList(){
      this.router.navigate(['/projets']);
    }

    goToMain(){
      this.router.navigate(['/']);
    }
}
