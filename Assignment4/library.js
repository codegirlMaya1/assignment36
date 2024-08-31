class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        this.displayBooks();
    }

    deleteBook(title) {
        this.books = this.books.filter(book => book.title !== title);
        this.displayBooks();
    }

    filterBooksByPages(pages) {
        return this.books.filter(book => book.pages <= pages);
    }

    searchBooks(query) {
        return this.books.filter(book => book.title.includes(query) || book.author.includes(query));
    }

    displayBooks(books = this.books) {
        const bookList = document.getElementById('book-list');
        bookList.innerHTML = '';
        books.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => this.deleteBook(book.title);
            li.appendChild(deleteButton);
            bookList.appendChild(li);
        });
    }
}

const library = new Library();

document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const book = new Book(title, author, pages);
    library.addBook(book);
    this.reset();
});

document.getElementById('filter-button').addEventListener('click', function() {
    const pages = document.getElementById('filter-pages').value;
    const filteredBooks = library.filterBooksByPages(pages);
    library.displayBooks(filteredBooks);
});