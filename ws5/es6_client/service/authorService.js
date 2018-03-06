/*
    Service to execute AJAX call to backend
*/

class AuthorService {

  constructor() {
    // Possible need to modify this
    this.baseUrl = "http://localhost:8080/ws4/rest/author/";
    //this.baseUrl = "http://localhost:8081/api/authors/";
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


  create(author, callback) {
    // NOT tested, just a hint ...
    window.$.ajax({
        url: this.baseUrl,
        data: author,
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

  find(id, callback) {
    // NOT tested, just a hint ...
    $.ajax({
        url: this.baseUrl + id,
        method: "GET",
        crossDomain: true,
        context: this
      }).done(data => {
        callback(data, findAll());
      })
      .fail(msg => {
        console.log(msg);
      })
  }
  delete(id, callback) {
    $.ajax({
      url: this.baseUrl + id,
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

  update(author, callback) {
     $.ajax({
      url: this.baseUrl +author.id,
      data: author,
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
export const authService = new AuthorService();
