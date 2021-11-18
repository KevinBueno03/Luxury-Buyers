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
  public validacionCorreo: boolean = false;
  public validacionContrasena: boolean = false;
  public status:boolean = false;
  public statusForm:boolean = false;
  public confPass: string = '';

  @Input() buyerRegistro:Buyer = {
    _id: '',
    name: '',
    email: '',
    password: '',
  }

  constructor(private BuyerService:BuyerService, private _Router: Router) { }

  guardarBuyer(){
    this.validaciones();
    if(this.statusForm){
      console.log('registrar comprador con datos:', this.buyerRegistro);
    }
  }

  validaciones(){
    this.validarCorreo(this.buyerRegistro.email);
    this.validarContrasena();
    this.validarCampos();
    if(this.validacionContrasena==true || this.validacionCorreo==true || this.status==true){
      this.statusForm = false;
    }else{
      this.statusForm = true;
    }
  }

  validarContrasena(){
    if(this.buyerRegistro.password != this.confPass){
      this.validacionContrasena = true;
    }
    else{
      this.validacionContrasena = false;
    }
  }

  validarCampos(){
    if(this.buyerRegistro.name =='' || this.buyerRegistro.password=='' || this.buyerRegistro.email==''
        || this.confPass == ''){
      this.status = true;
    }
    else{
      this.status = false;
    }
  }

  validarCorreo(correo: string){
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('correo', regularExpression.test(String(correo).toLowerCase()));
    if(regularExpression.test(String(correo).toLowerCase())){
      this.validacionCorreo = false;
    }else{
      this.validacionCorreo = true;
    }
  }
}
