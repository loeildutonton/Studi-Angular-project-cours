import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  @Input()
  public title: string | undefined; //Attendues en entrée du composant
  @Input()
  public content: string | undefined; //Attendues en entrée du composant

  @Output()
  private smileyClick = new EventEmitter<any>();

  newsList: string | undefined;

  constructor() {}

  appendSmiley() {
    this.smileyClick.emit(this.title);
  }
}
