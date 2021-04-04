import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrucksDataService {
  trucks = [
    {
      number: 'BE1234GH',
      mark: `KAMAZ`,
      typeOfCargo: `Паливо`,
      driversQuantity: 2
    },
    {
      number: 'AA5634LL',
      mark: `VOLVO`,
      typeOfCargo: `Риба`,
      driversQuantity: 2
    },
    {
      number: 'FK3009MN',
      mark: `DAEWOO`,
      typeOfCargo: `Дерево`,
      driversQuantity: 2
    }
  ];

  private drivers = [
    {name: 'Попов Олексій', truckNumb: 'BE1234GH'},
    {name: 'Білий Тарас', truckNumb: 'BE1234GH'},
    {name: 'Мирончук Володимир', truckNumb: 'AA5634LL'},
    {name: 'Анастасієв Кирил', truckNumb: 'AA5634LL'},
    {name: 'Патлайчук Олексій', truckNumb: 'FK3009MN'},
    {name: 'Рибаченко Євгеній', truckNumb: 'FK3009MN'}
  ];

  constructor() { }

  getDrivers(truckNumber): Observable<any[]> {
    return of(this.drivers.filter(elem => {
      return elem.truckNumb === truckNumber;
    }));
  }

  getTrucks(): Observable<any[]> {
    return of(this.trucks);
  }

  addTruck(truck) {
    this.trucks.push(truck);
  }

  deleteTruck(index) {
    this.trucks.splice(index, 1);
  }
}
