import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { UserService } from '../services/userServices/user.service';


@Injectable({
  providedIn: 'root' 
})
export class LoginValidatorService implements AsyncValidator{

  constructor(private userService: UserService) { }

  validate = (control: FormControl) => {
    return this.userService.isLoginExist(control.value).pipe(
      map ((loginExist) => {
          console.log ('validate')
          return (loginExist) ?
          {'isUsed': {
            message: 'login already exist'
          }} : null;
    }));
  };

}