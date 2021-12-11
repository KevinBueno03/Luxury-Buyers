import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/interfaces/company.interface';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  companies: Company[] = [];
  companies2: Company[] = [];

  constructor(private CompanyService: CompanyService, private router: Router) {
  }

  ngOnInit(): void {
    this.getComps()
  }

  getComps(){
    this.CompanyService.getCompanies()
      .subscribe(data => {
        //console.log('compañias: ',data.companies);
        this.companies = data.companies;
        this.companies2 = data.companies;
        this.collectionSize = data.companies.length;
        this.CompanyService.comps=data.companies;
      })
  }

  refreshCompanies() {
    this.companies = this.companies2
      .map((company, i) => ({id: i + 1, ...company}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  goCompany(id:any){
    //console.log("escogio la compañia: ", id);
    this.CompanyService.compActual=id;
    this.router.navigateByUrl('categories/companies/company');
  }
}

