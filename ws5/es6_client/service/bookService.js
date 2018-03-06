/*
    Service to execute AJAX call to backend
*/

class BookService {

  constructor() {
    // Possible need to modify this
    this.baseUrl = "http://localhost:8080/ws4/rest/book/";
    //this.baseUrl = "http://localhost:8081/api/books/";
  }

  findAll(callback) { // Callback is a function
    window.$.ajax({ // Use ugly global variable!
        url: this.baseUrl,
        method: "GET",
        context: this // MUST have!!!
      }).done(data => { // Success!
        callback(data);
      })
      .fail(msg => { // Exception!
        console.log(msg);
      })
  }

  create(book, callback) {
    // NOT tested, just a hint ...
    window.$.ajax({
        url: this.baseUrl,
        data: book,
        method: "POST",
        dataType: "json",
        crossDomain: true,
        context: this, // MUST have!!!
      }).done(data => {
        callback(data);
      })
      .fail(msg => {
        console.log(msg);
      })
  }

  find(isbn, callback) {
    // NOT tested, just a hint ...
    $.ajax({
        url: this.baseUrl + isbn,
        method: "GET",
        crossDomain: true,
        context: this,
      }).done(data => {
        callback(data);
      })
      .fail(msg => {
        console.log(msg);
      })
  }
delete(isbn, callback) {
    $.ajax({
      url: this.baseUrl + isbn,
      method: "DELETE",
      crossDomain: true,
      context: this
    }).done(data=>{
      this.findAll(callback);
    })
    .fail(msg =>{
      console.log(msg);
    })
    }

 update(book, callback) {
     $.ajax({
      url: this.baseUrl +book.isbn,
      data: book,
      method: "PUT",
      crossDomain: true,
      context: this
    }).done(data=>{
      this.findAll(callback);
    })
    .fail(msg =>{
      console.log(msg);
    })
    // TODO
  }
}

// Export object
export const bookService = new BookService();
