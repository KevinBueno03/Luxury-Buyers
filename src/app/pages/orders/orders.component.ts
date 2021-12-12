import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COUNTRIES, Country } from 'src/app/interfaces/country.interface';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  page = 1;
  pageSize = 4;
  collectionSize = 0;

  orders:Order[] = [];
  orders2:Order[] = [];

  constructor(private router: Router, private OrderService: OrderService) {
    this.OrderService.obtOrders()
    .subscribe(data=>{
      if(data){
        this.orders=data;
        this.orders2=data;
        this.collectionSize = data.length;
        this.refreshOrders();
      }
    })
  }

  ngOnInit(): void {
  }

  refreshOrders() {
    this.orders = this.orders2
      .map((order, i) => ({id: i + 1, ...order}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
