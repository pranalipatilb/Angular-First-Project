import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  public a=10;
  public b=20;
  public ans:any;
  constructor() { }
  addition(){
    this.ans=this.a+this.b;
    return this.ans;
  }
}
