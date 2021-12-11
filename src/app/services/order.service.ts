import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Buyer } from '../interfaces/buyer.interface';
import { Order } from '../interfaces/order.interface';
import { Product } from '../interfaces/product.interface';
import { BuyerService } from './buyer.service';
import { CompanyService } from './company.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiBaseUrl: string = environment.baseUrl;
  private _productActual = '';
  private _buyerActual: string='';
  private _orderActual: string='';

  public productDatos: Product={
    _id: '',
    name: '',
    description: '',
    img: '',
    active: true,
    price: 0
  }

  public order: Order={
    _id: '',
    idBuyer: '',
    idBiker: '',
    products: [],
    paid: false,
    subtotal: 0,
    isv: 0,
    commission: 0,
    total: 0,
    address: '',
    phone: '',
    amountProducts: 0,
    taked: false,
    nameStatus: '',
    buyerName: '',
    location: {}
  }

  public buyerDatos: Buyer={
    _id: '',
    name: '',
    email: '',
    active: false,
    password: '',
    token: '',
    img: ''
  }

  get prodDatos(){
    return this.productDatos;
  }

  get prodActual(){
    return this._productActual;
  }

  get orderAct(){
    return this._orderActual;
  }

  get orderDatos(){
    return this.order;
  }

  set prodDatos(value: any){
    this.productDatos = value;
  }

  set prodActual(value:string){
    this._productActual=value;
  }

  set orderAct(value:string){
    this._orderActual = value;
  }

  set buyerAct(value:string){
    this._buyerActual=value;
  }

  set prodDats(value:Product){
    this.productDatos= value;
  }

  set orderDatos(value:Order){
    this.order = value;
  }

  constructor(private http: HttpClient, private BuyerService: BuyerService, private CompanyService: CompanyService, private router: Router) {
  }

  getCompanies(): Observable<any>{
    return this.http.get<any>(`${this.apiBaseUrl}/orders/buyer/${this._buyerActual}`)
  }

  getBuyer(){
    const token = window.localStorage.getItem('token')
    this.http.post<Buyer>(`${this.apiBaseUrl}/buyers/buyer`,token )
    .subscribe(data =>{
      this._buyerActual = data._id;
      this.buyerDatos = data;
      this.getOrderActBuyer();
    })
  }

  getOrderActBuyer() {
    this.http.get<Order>(`${this.apiBaseUrl}/orders/order/not-paid/buyer/${this._buyerActual}`)
      .subscribe(data =>{
        this.order=data;
        this._orderActual = data._id;
        console.log('Order Actual: ', this.order)
      })
  }

  addProd(data:Product){
    console.log('add prod: ', data);
    this.http.post<any>(`${this.apiBaseUrl}/orders/order/${this._orderActual}/product-add`, data)
      .subscribe(data =>{
        this.getOrderActBuyer()
      })

  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

}
