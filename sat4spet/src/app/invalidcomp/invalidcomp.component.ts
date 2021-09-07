import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invalidcomp',
  template: `
   <h1>Sorry..invalid</h1>`
  ,
  styles: [
  ]
})
export class InvalidcompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
