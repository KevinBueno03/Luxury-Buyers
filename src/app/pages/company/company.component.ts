import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Company } from 'src/app/interfaces/company.interface';
import { Order } from 'src/app/interfaces/order.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { CompanyService } from 'src/app/services/company.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  validKart = false;
  orderSize = 0;
  data = [];
  products: Product[] = [];
  products2: Product[] = [];

  public companyDatos: Company={
    _id: '',
    name: '',
    description: '',
    calification: 0,
    products: [],
    img: '',
    active: true,
    logo: '',
    address: ''
  }

  public productData: Product = {
    idProduct: '',
    name: '',
    description: '',
    price: 0,
    img: '',
    active: false,
    amount: 0,
    totalPrice: 0
  }

  public order:Order = {
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

  constructor(private CompanyService: CompanyService, private router: Router, private modalService: NgbModal, private OrderService: OrderService) {
  }

  ngOnInit(): void {
    this.CompanyService.getCompany()
      .subscribe(resp => {
        //console.log('resp: ',resp)
        this.data = resp;
        this.obtComp(resp);
        this.order=this.OrderService.orderDatos;
        for(let i=0; i<this.order.products.length; i++){
          const prod:Product = this.order.products[i];
          this.orderSize += prod.amount;
        }
        if(this.orderSize>0){
          this.validKart=true;
        }
      })
  }

  refreshProducts() {
    this.products = this.products2
      .map((product, i) => ({id: i + 1, ...product}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  goProduct(id:any, content:any){
    for(let prod of this.products2){
      if(prod.idProduct==id){
        if(prod.active==true){
          this.productData=prod;
        }else{
          this.productData = {
            idProduct: '',
            name: '',
            description: '',
            price: 0,
            img: '',
            active: false,
            amount: 0,
            totalPrice: 0
          }
        }
      }
    }
    this.modalService.open(content, { centered: true, scrollable: true });
  }

  obtComp(resp:any){
    let prods:Product[] = [];
    for(let i=0; i<resp.length; i++){
      if(resp[i].companies._id==this.CompanyService.compActual){
        for(let prod of resp[i].companies.products){
          let js= {
            idProduct: prod._id,
            name: prod.name,
            description: prod.description,
            price: prod.price,
            img: prod.img,
            active: prod.active,
            amount: prod.amount,
            totalPrice: prod.totalPrice
          }
          prods.push(js);
        }
        this.companyDatos=resp[i].companies;
        //console.log('company--products: ',prods)
        this.products = prods;
        this.products2 = prods;
        this.collectionSize = prods.length;
        this.refreshProducts()
      }
    }
  }

  addToKart(id:string, contentSuccess:any){
    //console.log('agrego el producto: ', this.productData);
    this.OrderService.addProd(this.productData);
    this.validKart=true;
    this.modalService.dismissAll();
    this.modalService.open(contentSuccess, { centered: true });
  }

  closeAndRecharge(){
    this.OrderService.redirectTo('categories/companies/company');
    this.modalService.dismissAll();
  }

  refresh(){
    this.OrderService.redirectTo('categories/companies/company/shopping-cart');
  }
}
