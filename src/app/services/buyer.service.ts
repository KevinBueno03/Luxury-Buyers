import { Injectable } from '@angular/core';
import { Buyer } from '../interfaces/buyer.interface';

@Injectable({
  providedIn: 'root'
})

export class BuyerService {
  private _buyerActual = '';

  public datosBuyer: Buyer =
    {
      _id: '',
      name: '',
      email: '',
      password: ''
    };

  constructor(){

  }

  get buyer(): Buyer {
    return this.datosBuyer;
  }

  public get buyerActual() {
    return this._buyerActual;
  }

  public set buyerActual(value) {
    this._buyerActual = value;
  }

  guardarNuevoBuyer(buyer:Buyer) {
    console.log('guardar desde el service');
  }
}
