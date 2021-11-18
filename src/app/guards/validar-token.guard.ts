import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { BuyerService } from '../services/buyer.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private buyerService: BuyerService, private router: Router){}

  canActivate(): Observable<boolean> | boolean {
    console.log('canActivate');
    return this.buyerService.validarToken()
      .pipe(
        tap( valid => {
          if(!valid){
            this.router.navigateByUrl('/login');
          }
        })
      );
  }

  canLoad(): Observable<boolean> | boolean {
    console.log('canLoad');
    return this.buyerService.validarToken()
      .pipe(
        tap(valid => {
          if(!valid){
            this.router.navigateByUrl('/login');
          }
        })
      );
  }
}
