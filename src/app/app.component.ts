import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
    quotes = [
      new Quote('Read your Bible and pray everyday if you want to grow'),
      new Quote('Haraka Haraka Haina Baraka'),
      new Quote('Smile!'),
    ]

  }
