import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

// Dans ce composant se trouve la propriété username qui prendra la valeur saisie grâce à la fonction update() appelée
// après l'événement onBlur. On y trouve aussi l'expression régulière permettant la validation de cette valeur dans la
// propriété usernameRegex.
// Enfin, ce composant embarque le composant de validation créé précédemment auquel on transmet les valeurs des propriétés
// username et usernameRegex.
// De cette manière, lorsque l'utilisateur effectue une saisie, cela met à jour la propriété username.
// Ce qui déclenche l'événement ngOnChanges du composant de validation.

export class UserProfileComponent {
  username!: string;
  userNameRegex: RegExp = /^[a-zA-Z]*$/;

  constructor() { }

  update(value: string): void {
    this.username = value;
  }

}
