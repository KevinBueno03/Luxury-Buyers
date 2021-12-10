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

  get compActual(){
    return this._companyActual;
  }

  get comps(){
    return this.companies;
  }

  set compActual(value:string){
    this._companyActual=value;
  }

  set comps(value:Company[]){
    this.companies=value;
  }

  public companyDatos: Company={
    _id: '',
    name: '',
    description: '',
    calification: 0,
    products: [],
    img: '',
    active: false
  }

  constructor(private http: HttpClient, private CategoryService: CategoryService) {
  }

  getComps(){
    this.companies = this.CategoryService.compsCatAct;
  }


  getCompany(id:any){
    this._companyActual=id;
  }
}
