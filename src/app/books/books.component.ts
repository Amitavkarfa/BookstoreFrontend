import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  Books: Book[]=[];
  constructor(private bookService: BooksService,private cartService:CartService) {

   }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.Books = data;
    });
    if(this.keyWord.length===0)
      this.bookService.getBooks().subscribe((data: Book[]) => {
      this.Books = data;
    });
  }
  keyWord:string='';
  getBooksBySearchTerm(){
    return this.bookService.getBooks().subscribe((data: Book[]) => {
      this.Books = data.filter(book=>book.title.toLowerCase().includes(this.keyWord.toLowerCase()));
    })
  }
  addtoCart(book:Book){
    this.cartService.addToCart(book);
  }
}
