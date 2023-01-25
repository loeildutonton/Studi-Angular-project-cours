import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor() { }
  // Dans l'exemple de composant présenté ci-dessus, la méthode ngOnInit() sera appelée par Angular,
  // après que le constructor du composant ait été exécuté, et affichera Here we can fetch data dans la console.

  // Méthode appelée automatiquement par Angular
  ngOnInit(): void {
    console.log('Here we can fetch data');
  }

}
