import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseandlotsComponent } from './houseandlots/houseandlots.component';

const routes: Routes = [
  {path: '', redirectTo: '/houseandlots', pathMatch: 'full'},
  {path: 'houseandlots', component: HouseandlotsComponent},
  // {path: 'projectproperty/:id', component: ProjectPropertyPageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
