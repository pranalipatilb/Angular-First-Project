import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fdemo',
  template:`
  <button (click)="fun()" >hello</button>
  {{name}}
  `,
  //styleUrls: ['./fdemo.component.css']
})
export class FdemoComponent implements OnInit 
{
  name:string;
  
 //name :string fkt lihil tr tula error yenar mhnun mg tu 
 //1.name:string|undefined lihi kiva 
 //2.name:string aani constructor mdhe this.name="" takav laganar

  fun()
  {
    this.name="button clicked";
  }
  constructor()
  { 
    this.name="";
  }

  ngOnInit(): void {
  }
}
