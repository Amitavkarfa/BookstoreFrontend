import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>("http://localhost:8080/getBooks");
  }

  deleteBook(id:number){
    return this.http.delete(`http://localhost:8080/Books/${id}`);
  }

  updateBook(book:Book,book_id:number){
    return this.http.put(`http://localhost:8080/updateBook/${book_id}`,book);
  }

  AddBook(book:Book){
    return this.http.post(`http://localhost:8080/addBook`,book);
  }
}
