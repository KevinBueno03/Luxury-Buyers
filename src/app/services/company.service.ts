import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../interfaces/company.interface';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiBaseUrl: string = environment.baseUrl;
  private _companyActual = '';
  private companies: Company[] = [];
  private _categoryActual: string='';
  private companiesCat = [];

  public companyDatos: Company={
    _id: '',
    name: '',
    description: '',
    calification: 0,
    products: [],
    img: '',
    active: true,
    logo: ''
  }

  get compDatos(){
    return this.companyDatos;
  }

  get compActual(){
    return this._companyActual;
  }

  get comps(){
    return this.companies;
  }

  get compsCat(){
    return this.companiesCat
  }

  set compsCat(value: any){
    this.companiesCat = value;
  }

  set compActual(value:string){
    this._companyActual=value;
  }

  set comps(value:Company[]){
    this.companies=value;
  }

  set catActual(value:string){
    this._categoryActual=value;
  }

  set compDatos(value:Company){
    this.companyDatos=value;
  }

  constructor(private http: HttpClient, private CategoryService: CategoryService) {
    //this._categoryActual=this.CategoryService.catActual;
  }

  getCompanies(): Observable<any>{
    //console.log('catActSer: ', this._categoryActual)
    return this.http.get<any>(`${this.apiBaseUrl}/category/${this._categoryActual}/companies`)
  }

  getCompany(){
    return this.http.get<any>(`${this.apiBaseUrl}/category/${this._categoryActual}/companies-products`)
  }

}
