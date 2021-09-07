import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}  from '@angular/forms';
import { AppComponent } from './app.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
//import { DataTwowaybindingComponent } from './data-twowaybinding/data-twowaybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    TwowaybindingComponent,
//    DataTwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
