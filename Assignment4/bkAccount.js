class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return `Deposited: $${amount}. New Balance: $${this.balance}`;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return `Withdrawn: $${amount}. New Balance: $${this.balance}`;
        } else {
            return 'Insufficient balance';
        }
    }

    calculateInterest(rate) {
        const interest = (this.balance * rate) / 100;
        this.balance += interest;
        return `Interest: $${interest}. New Balance: $${this.balance}`;
    }
}

let account;

function createAccount() {
    const accountNumber = document.getElementById('accountNumber').value;
    const initialBalance = parseFloat(document.getElementById('initialBalance').value);
    account = new BankAccount(accountNumber, initialBalance);
    document.getElementById('output').innerText = `Account ${accountNumber} created with balance $${initialBalance}`;
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    const result = account.deposit(amount);
    document.getElementById('output').innerText = result;
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    const result = account.withdraw(amount);
    document.getElementById('output').innerText = result;
}

function calculateInterest() {
    const rate = parseFloat(document.getElementById('interestRate').value);
    const result = account.calculateInterest(rate);
    document.getElementById('output').innerText = result;
}