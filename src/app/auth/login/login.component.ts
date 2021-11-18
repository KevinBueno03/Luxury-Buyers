import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerService } from '../../services/buyer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input() buyerLogin= {
    email: '',
    password: ''
  };
  public status: boolean = false;
  public validacion: boolean = false;

  constructor(private BuyerService:BuyerService, private Router: Router) { }

  iniciarSesion(){
    this.BuyerService.login(this.buyerLogin.email, this.buyerLogin.password)
    .subscribe( resp =>{
      console.log(resp);
    })
    //console.log('Desea iniciar sesion el comprador con datos:', this.buyerLogin);
  }

}
