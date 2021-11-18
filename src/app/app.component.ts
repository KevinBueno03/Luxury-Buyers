import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bikers';
  lS: string | null = localStorage.getItem('token');
  onBuyerLogged = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.lS !== null){
      this.onBuyerLogged = true;
    }else{
      this.onBuyerLogged = false;
    }
  }
}
