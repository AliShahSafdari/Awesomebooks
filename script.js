/* eslint max-classes-per-file: ["error", 2] */
const container = document.querySelector('.contain');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class Store {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  removeBook(book) {
    this.books = this.books.filter((b) => b !== book);
    localStorage.setItem('books', JSON.stringify(this.books));
    container.innerHTML = '';
  }

  display() {
    const div = document.createElement('div');
    div.classList.add('book-list');
    div.innerHTML = '';

    console.log(container)

    container.innerHTML = this.books.reduce((output, book, i) => (
      `${output
      }
            <div class="book-list book-${i % 2 === 0 ? 'odd' : ''}">
            <div>
            <span>"${book.title}"</span>
            <span>by</span>
            <span>${book.author}</span>
            </div>
            <button class="button">remove</button>
            </div>
             
          `

    ), '');

    const button = document.querySelectorAll('.button');
    button.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.removeBook(this.books[index]);
        this.display();
      });
    });
  }

  addBook(book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.display();
  }
}

// const bookName = document.querySelector('.book');
// const authorName = document.querySelector('.author');
// const add = document.querySelector('.add');
// const store = new Store();

// add.addEventListener('click', (e) => {
//   e.preventDefault();
//   const newBook = new Book(bookName.value, authorName.value);
//   store.addBook(newBook);
//   bookName.value = '';
//   authorName.value = '';
// });

window.onload = () => {
  // store.display();
};



// function part

function display12() { 
  var content1 =` <h2>All Awesome Books</h2>
  <div class="contain">
  </div>`;
  return content1;
}
function display13() {
  var content1 = `<h2>Add a new book</h2>
  <div class="form-container">
  <form  class="form">
      <input class='book' type="text" name="books" placeholder="Book name"><br />
      <input class='author' type="text" name="authors" placeholder="Author"><br />
      <button class="add">Add</button>
  </form>
</div>`;
  return content1;
}
function display14() {
  var content1 = '<h1>This is out contact page.</h1>'
  return content1;
}

function getPageContent(page) {
  var contentToReturn;
  switch (page) {
      case 'list':
          contentToReturn = display12();
          document.getElementById('content').innerHTML = contentToReturn;
          break;
      case 'addNew':{
      
        contentToReturn = display13();
        document.getElementById('content').innerHTML = contentToReturn;
      }
           
          break;
      case 'contact':
          contentToReturn = display14();
          document.getElementById('content').innerHTML = contentToReturn;
          break;
      default:
          contentToReturn = display12();
          document.getElementById('content').innerHTML = contentToReturn;
          break;
  }
  // document.getElementById('content').innerHTML = contentToReturn;
  const container = document.querySelector('.contain');
  const add = document.querySelector('.add');
  const bookName = document.querySelector('.book');
  const authorName = document.querySelector('.author');
  const store = new Store();

  add.addEventListener('click', (e) => {
    e.preventDefault();
    const newBook = new Book(bookName.value, authorName.value);
    store.addBook(newBook);
    // bookName.value = '';
    // authorName.value = '';
  });

}