import { Component, OnInit } from '@angular/core';
import {TrucksDataService} from "../services/trucks-data.service";

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss']
})
export class TruckListComponent implements OnInit {
  trucks: any[];

  constructor(private truckService: TrucksDataService) {
    truckService.getTrucks().subscribe(
      (trucks) => this.trucks = trucks
    );
  }

  ngOnInit() {
  }
}
