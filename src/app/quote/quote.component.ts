import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Read your Bible and pray everyday if you want to grow','By Mary Wanjuhi',new Date(2005,5,2) ),
    new Quote('Haraka Haraka Haina Baraka','By Angela Wangari',new Date(2018,3,12) ),
    new Quote('Smile!','By Kirk Franklin',new Date(2019,3,5) ),
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
