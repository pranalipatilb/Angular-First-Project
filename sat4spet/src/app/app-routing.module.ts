import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { InvalidcompComponent } from './invalidcomp/invalidcomp.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  {path:'', component :BlankComponent},
  {path: 'first', component :FirstComponent},
  {path:'second', component :SecondComponent},
  {path:'**', component :InvalidcompComponent},
  {path:'**', component :InvalidcompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
