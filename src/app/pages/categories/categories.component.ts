import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  categories: Category[] = [];
  categories2: Category[] = [];

  constructor(private CategoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.CategoryService.getCatgs()
      .subscribe( resp => {
        //console.log('resp: ',resp);
        this.categories = resp;
        this.categories2 = resp;
        this.collectionSize = this.categories2.length;
        this.refreshCategories();
      })
  }

  refreshCategories() {
    this.categories = this.categories2
      .map((category, i) => ({id: i + 1, ...category}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  goCategory(id:any){
    //console.log("escogio la categoria: ", id);
    this.CategoryService.catActual=id;
    this.router.navigate(['categories/companies']);
  }
}

