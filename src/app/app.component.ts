import { Component } from '@angular/core';
import { News } from "./models/news";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';

  public newsList = [
    new News('Météo - Demain', 'Il fait beau demain.'),
    new News('Météo - Apres demain', 'Il fait beau après demain !'),
    new News('Attention', 'Problème de contrôle')
  ];

  appendSmiley($title: string) {
    // @ts-ignore
    this.newsList.find(news => news.title === $title).title += ' :)';
  }
}
