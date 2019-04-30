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

  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

      if(toDelete){
      this.quotes.splice(index,1);
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
