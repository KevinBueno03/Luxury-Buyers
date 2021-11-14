import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Buyer } from 'src/app/interfaces/buyer.interface';
import { BuyerService } from '../../services/buyer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  confPass = '';

  @Input() buyerRegistro:Buyer = {
    _id: '',
    name: '',
    email: '',
    password: ''
  }
  public status: boolean = false;
  public validacion: boolean = false;

  constructor(private BuyerService:BuyerService, private _Router: Router) { }

  guardarBuyer(){
    console.log('registrar comprador con datos:', this.buyerRegistro);
  }

}
