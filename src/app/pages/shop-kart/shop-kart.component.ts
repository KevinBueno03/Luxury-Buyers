import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/interfaces/order.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-shop-kart',
  templateUrl: './shop-kart.component.html',
  styleUrls: ['./shop-kart.component.css']
})
export class ShopKartComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  validKart = false;
  kartSize = 0;
  products: any[] = [];
  products2: any[] = [];

  productData:Product = {
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

  constructor(private router: Router, private modalService: NgbModal, private OrderService: OrderService) {
    //this.OrderService.redirectTo('categories/companies/company/shopping-cart');
  }

  ngOnInit(): void {
    this.order = this.OrderService.orderDatos;
    this.products = this.order.products;
    this.products2 = this.order.products;
    this.collectionSize = this.products2.length;
    this.kartSize = this.products2.length;
    this.refreshProducts();
  }

  refreshProducts() {
    this.products = this.products2
      .map((product, i) => ({id: i + 1, ...product}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  goUbication(){
    //console.log("escogio el producto: ", id);

  }

  addToKart(id:string, contentSuccess:any){
    this.goProduct(id, 'add');
    this.validKart=true;
    this.modalService.dismissAll();
    this.modalService.open(contentSuccess, { centered: true });
  }

  goProduct(id:string, tipo:string){
    for(let prod of this.products2){
      if(prod.idProduct==id){
        if(prod.active==true){
          this.productData=prod;
          switch(tipo){
            case 'add':
              //console.log("escogio add el producto: ", prod.idProduct);
              this.OrderService.addProd(this.productData);
              break
            case 'subs':
              //console.log("escogio subs el producto: ", prod.idProduct);
              this.OrderService.subsProd(this.productData);
              break
            case 'del':
              //console.log("escogio del el producto: ", prod.idProduct);
              this.OrderService.delProd(this.productData);
              break
            default:
              break
          }
        }
      }
    }
    this.OrderService.redirectTo('categories/companies/company/shopping-cart');
  }

  addOne(id:string){
    this.goProduct(id, 'add');
  }

  substractOne(id:string){
    this.goProduct(id, 'subs');
  }

  deleteOne(id:string){
    this.goProduct(id, 'del');
  }
}
