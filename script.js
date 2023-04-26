/* eslint max-classes-per-file: ["error", 2] */

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
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    document.querySelector('.msg').classList.remove('message');
    setTimeout(() => {
      document.querySelector('.msg').classList.add('message');
    }, 1500);
  }
}
const store = new Store();

function bookList() {
  const content1 = ` <div class="book-list-container"><h2>All Awesome Books</h2>
  <div class="contain">
  </div>
  </div>
  `;
  return content1;
}
function addNewBook() {
  const content1 = `<div class="add-book-container" ><h2>Add a new book</h2>
  <div class="form-container">
  <form>
      <input class='book' type="text" name="books" placeholder="Book name"> 
      <input class='author' type="text" name="authors" placeholder="Author"> 
      <div class="btn-container"><button class="add">Add</button></div>
      <span class="msg message">Book is sucessfully added</span>
  </form>
</div>
</div>`;
  return content1;
}
function contact() {
  const content1 = `<div class="contact-continar">
  <h2>Contact information</h2>
  <div class="contact-content">
  <p>Do you have any questions or you just want to say "Hello"?<br>
  You can reach out to us!
  </p>
  <ul>
  <li> Our e-mail<a>alishahsafdari905@gmail.com</a></li>
  <li>Our phone number:+93744716508 </li>
  <li> Our address : Microverse Students</li>
  </ul>
  </div>
  </div>`;
  return content1;
}

function getPageContent(page) {
  let contentToReturn;
  switch (page) {
    case 'list':
      contentToReturn = bookList();
      document.getElementById('content').innerHTML = contentToReturn;
      store.display();

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
        bookName.value = '';
        authorName.value = '';
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

window.onload = () => {
  getPageContent('list');
};