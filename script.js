class Book {
  constructor(title, author){
    this.title = title;
    this.author = author
  }
}
class Store{
  constructor(){
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }
  addBook(book){
    this.books.push(book)
    localStorage.setItem('books', JSON.stringify(this.books));
    display()
  }

  removeBook(book) {
    this.books = this.books.filter((b) => b !== book);
    localStorage.setItem('books', JSON.stringify(this.books));
    container.innerHTML = '';
  }

}

const bookName = document.querySelector('.book');
const authorName = document.querySelector('.author');
const add = document.querySelector('.add');
const container = document.querySelector('.contain');
let store = new Store()

function display() {
  const div = document.createElement('div');
  div.classList.add('book-list');
  div.innerHTML = '';
  container.innerHTML = store.books.reduce((output, book) => (
    `${output
    }
          <div class="book-list">
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
      store.removeBook(store.books[index]);
      display();
    });
  });
}

add.addEventListener('click', () => {

  const newBook = new Book(bookName.value, authorName.value);
  store.addBook(newBook);
});

window.onload = () => {
  display();
};
