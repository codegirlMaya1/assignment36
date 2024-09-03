// Constructor function for Book
function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

// Array to store books
let library = [];

// Function to add a book to the library
function addBook(author, title, pages) {
    const book = new Book(author, title, pages);
    library.push(book);
}

// Function to search for a book by title
function searchBookByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

// Function to search for a book by author
function searchBookByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

// Function to filter books by number of pages
function filterBooksByPages(minPages, maxPages) {
    return library.filter(book => book.pages >= minPages && book.pages <= maxPages);
}

// Example usage
addBook('J.K. Rowling', 'Harry Potter and the Sorcerer\'s Stone', 309);
addBook('J.R.R. Tolkien', 'The Hobbit', 310);
addBook('George Orwell', '1984', 328);

console.log(searchBookByTitle('Harry Potter'));
console.log(searchBookByAuthor('Tolkien'));
console.log(filterBooksByPages(300, 320));

// Account Balance
class Account {
    constructor(accountNumber, owner, balance = 0) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Insufficient balance or invalid amount.');
        }
    }

    calculateInterest(rate) {
        if (rate > 0) {
            const interest = this.balance * (rate / 100);
            this.balance += interest;
            console.log(`Interest: $${interest}. New balance: $${this.balance}`);
        } else {
            console.log('Interest rate must be positive.');
        }
    }
}

// Example usage:
const account1 = new Account('123456', 'John Doe', 1000);
account1.deposit(500);
account1.withdraw(200);
account1.calculateInterest(5);