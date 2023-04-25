let books = [
];

const bookName = document.querySelector('.book');
const authorName = document.querySelector('.author');
const add = document.querySelector('.add');
const container = document.querySelector('.contain');
function removeBook(book) {
    books = books.filter((b) => b !== book);
    localStorage.setItem('books', JSON.stringify(books));
    container.innerHTML = '';
}

function display() {
    const div = document.createElement('div');
    div.classList.add('book-list');
    div.innerHTML = '';
    container.innerHTML = books.reduce((output, book) => (
        `${output
        }
          <div class="book-list">
          <span>${book.title}</span>
          <span>${book.writer}</span>
          <button class="button">remove</button>
          </div>
           
        `
    ), '');

    const button = document.querySelectorAll('.button');
    button.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            removeBook(books[index]);
            display(books[index]);
        });
    });
}

function addBook(book) {
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    display(book);
}

add.addEventListener('click', () => {
    const newBook = { title: bookName.value, writer: authorName.value };
    addBook(newBook);
});

window.onload = () => {
    books = JSON.parse(localStorage.getItem('books')) || [];
    display(books);
};
