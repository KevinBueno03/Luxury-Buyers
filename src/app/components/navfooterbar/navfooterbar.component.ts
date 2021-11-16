import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navfooterbar',
  templateUrl: './navfooterbar.component.html',
  styleUrls: ['./navfooterbar.component.css']
})
export class NavfooterbarComponent {
  nombVars = [{"var": true}, {"var": false}, {"var": false}, {"var": false}];
  paginas = [{"page": 'categories'}, {"page": 'orders'}, {"page": 'wish-list'}, {"page": 'profile-user'}];

  categorias = this.nombVars[0]['var'];
  ordenes = this.nombVars[1]['var'];
  deseos = this.nombVars[2]['var'];
  perfil = this.nombVars[3]['var'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate([`/categories`])
  }

  cambiarActiveIcon(ind:number) {
    for (let i=0; i < this.nombVars.length; i++) {
      if(i==ind){
        this.nombVars[i]['var']=true;
      } else {
        this.nombVars[i]['var']=false;
      }
    }

    this.categorias = this.nombVars[0]['var'];
    this.ordenes = this.nombVars[1]['var'];
    this.deseos = this.nombVars[2]['var'];
    this.perfil = this.nombVars[3]['var'];

  }
}
