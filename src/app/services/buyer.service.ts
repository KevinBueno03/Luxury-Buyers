import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, Buyer, LoginResponse } from '../interfaces/buyer.interface';
import { environment } from '../../environments/environment'
import { catchError, map, of, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class BuyerService {
  private apiBaseUrl: string = environment.baseUrl;
  private _buyerActual = '';

  public datosBuyer: Buyer ={
    _id: '',
    name: '',
    email: '',
    password: '',
    active: true,
    img: '',
    token: ''
  };

  constructor(private http:HttpClient){}

  get buyer(): Buyer {
    return this.datosBuyer;
  }

  public get buyerActual() {
    return this._buyerActual;
  }

  public set buyerActual(value) {
    this._buyerActual = value;
  }

  login( email: string, password: string){
    const url = `${this.apiBaseUrl}/login?type=buyer`;
    const body = { email, password };

    return this.http.post<LoginResponse>( url, body )
      .pipe(
        tap(resp => {
          if(resp.token){
            localStorage.setItem('token', resp.token!);
          }
        }),
        map(resp => true),
        catchError(err => of(false))
      )
  }

  validarToken(){
    const url = `${this.apiBaseUrl}/auth`;
    const headers = new HttpHeaders()
    .set('x-access-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>( url, {headers} )
  }

  guardarNuevoBuyer(buyer:Buyer) {
    //console.log('guardar desde el service');
    const url = `${this.apiBaseUrl}/register-buyer`;
    const body = { buyer };

    return this.http.post<AuthResponse>( url, body )
  }

  logout(){
    localStorage.clear();
  }
}

