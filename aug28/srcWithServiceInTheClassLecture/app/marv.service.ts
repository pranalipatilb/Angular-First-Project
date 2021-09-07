import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvService {

  constructor() { }
  fun(){
    return "marvellous";
  }
}
