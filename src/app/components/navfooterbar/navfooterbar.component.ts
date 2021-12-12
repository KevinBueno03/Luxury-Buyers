import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BuyerService } from 'src/app/services/buyer.service';

@Component({
  selector: 'app-navfooterbar',
  templateUrl: './navfooterbar.component.html',
  styleUrls: ['./navfooterbar.component.css']
})
export class NavfooterbarComponent {
  urlImgUser = '';
  nombVars = [{"var": true}, {"var": false}, {"var": false}];
  paginas = [{"page": 'categories'}, {"page": 'orders'}, {"page": 'profile-user'}];

  categorias = this.nombVars[0]['var'];
  ordenes = this.nombVars[1]['var'];
  perfil = this.nombVars[2]['var'];

  constructor(private router: Router, private modalService:NgbModal, private BuyerService:BuyerService) { }

  ngOnInit(): void {
    this.router.navigate([`/categories`])
    this.BuyerService.returnBuyer()
    .subscribe( data =>{
      //console.log(data);
      this.urlImgUser = data.img;
      console.log('url: ', this.urlImgUser)
    })
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
    this.perfil = this.nombVars[2]['var'];
  }

  cerrarSesion(content:any) {
    this.modalService.open(content, { centered: true })
  }

  closeAndRecharge(){
    this.modalService.dismissAll();
    this.BuyerService.logout();
    window.location.reload();
  }

}
