/*
   Collection of Authors
*/
import {
  Book
} from "./book.js"
import {
  eventBus as eB
} from "../util/eventBus.js"
import {
  bookService as as
} from "../service/bookService.js"

class bookCatalogue {

  constructor() {
    // Test data used when not connected to back end
    this.books = [
        new Book("OO", "Twilight", "2"),
        new Book("FF", "Twilight2", "3"),
        new Book("LL", "Twilight3", "4")
      ];

  } 

  find(isbn) {
    return this.books.find(a => a.isbn === isbn);
  }

  findAll() {
    //When using AJAX uncomment this
    as.findAll(data => {
      return eB.notify("", data);
    })
    // No backend use this, comment out when using AJAX
    //return this.books;
  }

  create(book) {
    as.create(book, data=>{
      eB.notify("ADD", data);
    })
    // TODO Add AJAX
    //this.books.push(book);
     // First param not used
  }

  update(book) {
    // TODO Add AJAX
    as.update(book, data=>{
      eB.notify("PUT", data);
    })

    //var a = this.find(books.isbn);
    //this.books = this.books.filter(elem => elem !== a);
    //this.books.push(book);
    
  }

  delete(isbn) {
    // TODO Add AJAX
    as.delete(isbn, data=>{
       eB.notify("DELETE", data);
     })
    //var a = this.find(isbn);
    //this.books = this.books.filter(elem => elem !== a);
   
  }
}

// Singleton
export const bookCat = new bookCatalogue();
