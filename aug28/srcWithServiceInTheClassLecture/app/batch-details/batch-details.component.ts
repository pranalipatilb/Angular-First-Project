import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';
import { BatchService } from '../batch.service';
import { MarvService } from '../marv.service';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit 
{
  // Create array to hold the information of batches
  public batches:any = [];
  public name :any=[];
  public addtions:any;

  // Add instance of Service in constructor
  constructor(private _batchservice:BatchService,private _o:MarvService,private _o2:AddService)
  {
  }

  // Call the service method once
  ngOnInit() 
  {
    this.batches = this._batchservice.GetBatchDetails();
    this.name=this._o.fun();
    this.addtions=this._o2.addition();
  }
}
