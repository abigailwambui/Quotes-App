import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Read your Bible and pray everyday if you want to grow'),
    new Quote('Haraka Haraka Haina Baraka'),
    new Quote('Smile!'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
