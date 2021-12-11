import { AbstractControl } from "@angular/forms";

export class validationsForm {

  static validatePasswords(secondPassword: string){
    return ( firstPassword: AbstractControl)=>{
      const firstValue = firstPassword.value;
      if(firstValue !== secondPassword){
        return {validatePasswords:true}
      }
      return null;
    };
  }
}
