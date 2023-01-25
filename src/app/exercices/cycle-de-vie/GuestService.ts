import { Injectable, OnInit } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GuestService implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.getList();
  }

  getList(): string[] {
    return ['David Marty', 'Grégorie Le Corvec', 'Jean-François Imbernon'];
  }
}
