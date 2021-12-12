import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Buyer } from 'src/app/interfaces/buyer.interface';
import { Order } from 'src/app/interfaces/order.interface';
import { BuyerService } from 'src/app/services/buyer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  pendientes = 0;
  pagadas = 0;
  montoTot = 0;
  totProds = 0;
  contVieja = '';
  contVieja2 = '';
  registerForm : FormGroup;

  orders:Order[] = [];
  datosBuyer:Buyer ={
    _id: '',
    name: '',
    email: '',
    active: false,
    password: '',
    token: '',
    img: ''
  }

  constructor(private BuyerService:BuyerService, private router: Router, private OrderService:OrderService, private fB:FormBuilder, private modalService: NgbModal) {
    this.registerForm=this.fB.group({
      img: new FormControl(),
      password: new FormControl ('',[Validators.required, Validators.minLength(8)]),
      confPass: new FormControl('',[Validators.required, Validators.minLength(8)]),
    });
  }

  get registerUsuario () {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.datosBuyer = this.BuyerService.buyer;
    console.log("DatosBuyer:", this.datosBuyer);
    this.OrderService.obtOrders()
    .subscribe(data=>{
      if(data){
        this.orders=data;
        for(let order of this.orders){
          this.montoTot+=order.total;
          this.totProds+=order.amountProducts;
          if(order.paid==true){
            this.pagadas+=1
          }else{
            this.pendientes+=1
          }
        }
      }
    })
  }

  irActBuyer(contentSuccess:any){
    this.modalService.open(contentSuccess, { centered: true });
  }

  closeAndRecharge(){
    this.modalService.dismissAll();

  }
}
