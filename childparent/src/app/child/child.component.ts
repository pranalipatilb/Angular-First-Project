import { Component, OnInit, Output,EventEmitter } from '@angular/core';
//import{ EventEmitter} from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() public myevent = new EventEmitter();

  public fun(){
    //console.log("button pressed");
    this.myevent.emit("hello from child");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
