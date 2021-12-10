import { Component, OnInit } from '@angular/core';
import { COUNTRIES, Country } from 'src/app/interfaces/country.interface';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;
  countries: Country[] = [];

  constructor(private CompanyService: CompanyService) {
    this.refreshCountries();
  }

  ngOnInit(): void {
  }

  refreshCountries() {
    this.countries = COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}

