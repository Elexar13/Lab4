import {Component, Input, OnInit} from '@angular/core';
import {TrucksDataService} from "../services/trucks-data.service";

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.scss']
})
export class TruckComponent implements OnInit {
  @Input() truck;
  @Input() truckIndex;
  showInfo = false;

  constructor(private truckService: TrucksDataService) { }

  ngOnInit(): void {
  }

  delTruck() {
    this.truckService.deleteTruck(this.truckIndex);
  }
}
