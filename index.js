import Store from './modules/store.js';
import Book from './modules/book.js';
import { bookList } from './modules/bookList.js';
import { addNewBook } from './modules/addNewBook.js';
import { contact } from './modules/contact.js';
import { DateTime } from './modules/luxon.js';

const btnContact = document.querySelector('#btnContact');
const btnAddBook = document.querySelector('#btnAddbook');
const btnList = document.querySelector('#btnList');
const store = new Store();

btnContact.addEventListener('click', () => {
  document.getElementById('content').innerHTML = contact();
});

btnAddBook.addEventListener('click', () => {
  document.getElementById('content').innerHTML = addNewBook();
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
});

btnList.addEventListener('click', () => {
  document.getElementById('content').innerHTML = bookList();
  store.display();
});

setInterval(()=>{
  const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.querySelector('.date').innerHTML = currentDate;
},(1000));

window.onload = () => {
  document.getElementById('content').innerHTML = bookList();
  store.display();
  const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.querySelector('.date').innerHTML = currentDate;
};