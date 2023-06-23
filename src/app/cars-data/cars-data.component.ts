import { Component, OnInit } from '@angular/core';
import { Model } from 'src/model/dataModel';

@Component({
  selector: 'app-cars-data',
  templateUrl: './cars-data.component.html',
  styleUrls: ['./cars-data.component.css'],
})
export class CarsDataComponent implements OnInit {
  cars!: Model[];
  ngOnInit(): void {
    this.cars = [
      {
        brand: 'Toyota',
        carModel: 'Supra MK4',
        image: 'assets/images/anastase-maragos-Lrfuy93_hAc-unsplash.jpg',
      },
      {
        brand: 'Nissan',
        carModel: '240sx',
        image: 'assets/images/chris-demers-yveHitu4uLQ-unsplash.jpg',
      },
    ];
  }
}
