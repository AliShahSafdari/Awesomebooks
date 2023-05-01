export default  class Store {
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