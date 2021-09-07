import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infosystems',
  templateUrl: './infosystems.component.html',
  styleUrls: ['./infosystems.component.css']
})
export class InfosystemsComponent implements OnInit 
{
  name = " Angular-12";

  fun():string
  {
    return "Inside Fun()";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
