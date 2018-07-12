import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HouseandlotsComponent } from './houseandlots/houseandlots.component';
import { LotsComponent } from './houseandlots/lots/lots.component';
import { HousesComponent } from './houseandlots/houses/houses.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { HouseService } from './services/house.service';


@NgModule({
  declarations: [
    AppComponent,
    HouseandlotsComponent,
    LotsComponent,
    HousesComponent,
    SidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    HouseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
