import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnChanges {
  @Input()
  value!: string;
  @Input()
  regex!: RegExp;
  isValid!: boolean;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'value': {
            // C'est dans ce composant que sera traitée la validation par l'utilisation du hook ngOnChanges.
            // Pour cela, on utilise la fonction test() sur la propriété regex : this.regex.test(propName.currentValue).
            this.isValid = this.regex.test(changes[propName].currentValue);
            break;
          }
        }
      }
    }
  }

}
