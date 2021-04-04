import {Component, OnInit} from '@angular/core';
import {TrucksDataService} from "../services/trucks-data.service";

@Component({
  selector: 'app-new-truck',
  templateUrl: './new-truck.component.html',
  styleUrls: ['./new-truck.component.scss']
})
export class NewTruckComponent implements OnInit {

  showForm = false;

  constructor(private truckService: TrucksDataService) { }

  ngOnInit(): void {
  }

  onSubmit(myForm) {
    const fields = myForm.form.controls;
    this.showForm = false;
    this.truckService.addTruck({
      number: fields.number.value,
      mark: fields.mark.value,
      typeOfCargo: fields.typeOfCargo.value,
      driversQuantity: fields.driversQuantity.value
    });
  }
}
