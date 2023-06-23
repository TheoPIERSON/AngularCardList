import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'src/model/dataModel';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() card!: Model;
  ngOnInit(): void {
    /* this.card = new Model();
    this.card.brand = 'Toyota';
    this.card.carModel = 'Supra MK4';
    this.card.image = 'assets/images/anastase-maragos-Lrfuy93_hAc-unsplash.jpg';*/
  }
}
