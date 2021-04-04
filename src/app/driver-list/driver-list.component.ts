import { Component, OnInit } from '@angular/core';
import {TrucksDataService} from "../services/trucks-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {

  drivers: any[];

  constructor(private truckService: TrucksDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.getDrivers(params.truckId)
    );
  }

  getDrivers (numb: string) {
    const n = numb;
    this.truckService.getDrivers(n).subscribe(
      (drivers) => {
        this.drivers = drivers;
      }
    );
  }

}
