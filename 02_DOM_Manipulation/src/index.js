//BookStore has been moved to data.js 
console.log(bookStore);

function formatPrice(price) {
  // return `$${price.toFixed(2)}`;
  return '$' + Number.parseFloat(price).toFixed(2);
}

function renderHeader(bookStore) {
  document.querySelector('h1').textContent = bookStore.name
  
}
// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html struture for rendering 
// that book and insert it into our webpage!

// function renderBook(book) {
// should create an li element that looks something like this:
  //   <li class="list-li">
  //     <h3>Eloquent JavaScript</h3>
  //     <p>Marjin Haverbeke</p>
  //     <p>$10.00</p>
  //     <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
  //   </li>

  