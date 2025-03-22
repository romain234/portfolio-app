import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';

  /*
  onActivate(e: any) {
    console.log(e.constructor.name);
    if (e.constructor.name=="_DetailProjetComponent") {
      console.log("oui");
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
  }*/
}

