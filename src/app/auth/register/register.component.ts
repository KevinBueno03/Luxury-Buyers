import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Buyer } from 'src/app/interfaces/buyer.interface';
import { validationsForm } from 'src/app/utils/formValidations';
import { BuyerService } from '../../services/buyer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  submited : boolean = false;
  registerForm : FormGroup;

  constructor(private BuyerService:BuyerService, private _Router: Router, private fB:FormBuilder) {
      this.registerForm =this.fB.group({
      name: new FormControl ('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl ('',[Validators.required, Validators.minLength(8)]),
      confPass: new FormControl('',[Validators.required]),
    },{
      Validators: this.MustMatch('password', 'confPass')
    }
    );
  }

  get registerUsuario () {
    return this.registerForm.controls;
  }

  MustMatch(passA:string, passB:string) {
    return(formGroup:FormGroup)=>{
      const controlA = formGroup.controls[passA];
      const controlB = formGroup.controls[passB];
      if(controlB.errors && controlB.errors['MustMatch']){
        return
      }
      if(controlA.value != controlB.value){
        controlB.setErrors({MustMatch:true});
      }
    }
  }

  onSubmit(){
    this.submited=true;
    if(!this.registerForm.valid){
      console.log('invalido')
      return;
    }
  }

  guardarBuyer(){
    const {name, email,password } = this.registerForm.value;

    if(this.submited){
      console.log('registrar comprador con datos:', {_id:'', name, email, password, img:''});
    }
  }
}
