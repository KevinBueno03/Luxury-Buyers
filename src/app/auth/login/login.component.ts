import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerService } from '../../services/buyer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  validacion = false;
  @Input() buyerLogin= {
    email: '',
    password: ''
  };

  constructor(private BuyerService:BuyerService, private router: Router) { }

  iniciarSesion(){
    console.log('Desea iniciar sesion el comprador con datos:', this.buyerLogin);
    this.BuyerService.login(this.buyerLogin.email, this.buyerLogin.password)
    .subscribe( resp =>{
      console.log(resp);
      window.location.reload();
    })
  }

}
