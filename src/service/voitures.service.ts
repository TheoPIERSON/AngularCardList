import { Injectable } from '@angular/core';
import { Model } from 'src/model/dataModel';

@Injectable({
  providedIn: 'root',
})
export class VoituresService {
  cars: Model[] = [
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
    {
      brand: 'Mitsubishi',
      carModel: 'Lancer Evolution',
      image: 'assets/images/matteo-balzanelli-9OUv-fdqEI4-unsplash.jpg',
    },
  ];
  getCars(): Model[] {
    return this.cars;
  }
}
