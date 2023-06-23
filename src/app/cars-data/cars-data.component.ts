import { Component, OnInit } from '@angular/core';
import { Model } from 'src/model/dataModel';
import { VoituresService } from 'src/service/voitures.service';

@Component({
  selector: 'app-cars-data',
  templateUrl: './cars-data.component.html',
  styleUrls: ['./cars-data.component.css'],
})
export class CarsDataComponent implements OnInit {
  cars!: Model[];

  constructor(private carsServices: VoituresService) {}

  ngOnInit(): void {
    this.cars = this.carsServices.getCars();
  }
}
