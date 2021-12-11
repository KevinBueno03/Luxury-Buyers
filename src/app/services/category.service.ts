import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/category.interface';
import { Company } from '../interfaces/company.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiBaseUrl: string = environment.baseUrl;
  private _categoryActual = '';
  private categories: Category[] = [];
  private companiesCatActual: Company[] = [];

  get catActual(){
    return this._categoryActual;
  }

  get catgs(){
    return this.categories;
  }

  get compsCatAct(){
    return this.companiesCatActual;
  }

  set catActual(value:string){
    this._categoryActual=value;
  }

  set catgos(value:Category[]){
    this.categories=value;
  }

  set compsCatActual(value:Company[]){
    this.companiesCatActual=value;
  }

  constructor(private http:HttpClient) {
  }

  getCatgs(): Observable<Category[]>{
    return this.http.get<any>(`${this.apiBaseUrl}/categories`);
  }
}
