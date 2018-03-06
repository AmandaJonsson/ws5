/*
    Test groud for the authorService.js. Testing AJAX calls
*/

import {
  bookService as as
} from "../service/bookService.js"

as.findAll(data => {
  console.log(data);
});

as.find("FF", data => {
  console.log(data);
});

/*
let a = new Authot
as.create()
*/
