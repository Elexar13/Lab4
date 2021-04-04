import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TruckComponent } from './truck/truck.component';

import {FormsModule} from '@angular/forms';
import { NewTruckComponent } from './new-truck/new-truck.component';
import {RouterModule, Routes} from '@angular/router';
import { TruckListComponent } from './truck-list/truck-list.component';
import { DriverListComponent } from './driver-list/driver-list.component';


const routes: Routes = [
  {path: 'trucks', component: TruckListComponent},
  {path: 'drivers/:truckId', component: DriverListComponent},
  {path: '', redirectTo: 'trucks', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent, TruckComponent, NewTruckComponent, TruckListComponent, DriverListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
