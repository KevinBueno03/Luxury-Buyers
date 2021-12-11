import { Component } from '@angular/core';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bikers';

  lS: string | null = localStorage.getItem('token');
  onBuyerLogged = false;

  constructor(private OrderService: OrderService){}

  ngOnInit() {
    if(this.lS !== null){
      this.onBuyerLogged = true;
      this.OrderService.getBuyer();
    }else{
      this.onBuyerLogged = false;
    }
  }
}
