import { Component, OnInit } from '@angular/core';
import { GuestService } from "../GuestService";

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {
  guestList: string[] | undefined;

  // Comme on peut le remarquer dans cet exemple, le constructeur du composant permet d'injecter le service BookingService
  // pour qu'il soit disponible depuis tout le composant.
  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
    this.guestList = this.guestService.getList();
  }

  // Afin de mettre en place le composant demandé, il est tout d'abord nécessaire d'importer le composant GuestService
  // dans le composant GuestList. Il faut ensuite importer l'interface OnInit depuis la librairie @angular/core et
  // l'implémenter. On utilise après cela le hook ngOnInit pour récupérer la liste des invités avec
  // this.guests = this.guestService.getList();.
}
