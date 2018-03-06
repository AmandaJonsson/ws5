/*
    Book model
*/

export class Book {
	//added genre

  constructor(isbn, title, price) {
    this.isbn = isbn;
    this.title = title;
    this.price = price;
  }
}
