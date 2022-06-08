import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users(){
    return[
      {name:'Kavya',gender:'female',age:21},
      {name:'Scarlet',gender:'female',age:21},
      {name:'Mohanraj',gender:'male',age:51},
      {name:'Natasha',gender:'female',age:25}
    ]
  }
}
