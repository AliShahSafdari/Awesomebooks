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
    const container = document.querySelector('.contain');
    this.books = this.books.filter((b) => b !== book);
    localStorage.setItem('books', JSON.stringify(this.books));
    container.innerHTML = '';
  }

  display() {
    const container = document.querySelector('.contain');
    const div = document.createElement('div');
    div.classList.add('book-list');
    div.innerHTML = '';

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
    console.log(this.books)
    this.books.push(book);
     localStorage.setItem('books', JSON.stringify(this.books));
     document.querySelector(".msg").classList.remove('message')
     setTimeout(()=>{
      document.querySelector(".msg").classList.add('message')
     }, 3000)
  }
}
 const store = new Store();

window.onload = () => {
  getPageContent('list')
};

function bookList() {
  var content1 = ` <h2>All Awesome Books</h2>
  <div class="contain">
  </div>`;
  return content1;
}
function addNewBook() {
  var content1 = `<h2>Add a new book</h2>
  <div class="form-container">
  <form  class="form">
      <input class='book' type="text" name="books" placeholder="Book name"><br />
      <input class='author' type="text" name="authors" placeholder="Author"><br />
      <button class="add">Add</button>
      <span class="msg message">Book is sucessfully added</span>
  </form>
</div>`;
  return content1;
}
function contact() {
  var content1 = '<h1>This is out contact page.</h1>'
  return content1;
}

function getPageContent(page) {

  var contentToReturn;
  switch (page) {
    case 'list': {
      contentToReturn = bookList();
      document.getElementById('content').innerHTML = contentToReturn;
      store.display()
    }
      break;
    case 'addNew': {

      contentToReturn = addNewBook();
      document.getElementById('content').innerHTML = contentToReturn;

      const add = document.querySelector('.add');
      const bookName = document.querySelector('.book');
      const authorName = document.querySelector('.author');
       
      

      add.addEventListener('click', (e) => {
        e.preventDefault();
        const newBook = new Book(bookName.value, authorName.value);
        store.addBook(newBook);
      });

    }

      break;
    case 'contact':
      contentToReturn = contact();
      document.getElementById('content').innerHTML = contentToReturn;
      break;
    default:
      contentToReturn = bookList();
      document.getElementById('content').innerHTML = contentToReturn;
      break;
  }
}