import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Read your Bible and pray everyday if you want to grow','By Mary Wanjuhi'),
    new Quote('Haraka Haraka Haina Baraka','By Angela Wangari'),
    new Quote('Smile!','By Kirk Franklin'),
  ]

  completeQuote(isComplete,index){
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
