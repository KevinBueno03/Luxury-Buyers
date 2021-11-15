import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navfooterbar',
  templateUrl: './navfooterbar.component.html',
  styleUrls: ['./navfooterbar.component.css']
})
export class NavfooterbarComponent implements OnInit {
  nombVars = [{"var": true}, {"var": false}, {"var": false}, {"var": false},];
  categorias = this.nombVars[0]['var'];
  ordenes = this.nombVars[1]['var'];
  deseos = this.nombVars[2]['var'];
  perfil = this.nombVars[3]['var'];

  constructor() { }

  ngOnInit(): void {
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
