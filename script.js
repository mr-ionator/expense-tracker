console.log('epense tracker loaded');

// dom elements 
const expenseForm = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categorySelect = document.getElementById('category');
const dateInput = document.getElementById('date');
const expenseList = document.getElementById('expense-list');
const totalAmountDisplay = document.getElementById('total-amount');

// for verification
console.log("form:", expenseForm);
console.log("description INput:", descriptionInput);
console.log("Expense List:", expenseList);


// variables
let expenses = [];
let totalAmount = 0;

// Function 

// for formatting numbers as currency 
function formatCurrency(amount) {
    return `${amount.toFixed(2)}`;
}

// test 
console.log(formatCurrency(42.5));
console.log(formatCurrency(100));


// expense summary for testing 
function createExpenseSummary(description, amount,category) {
    return `${description}: ${formatCurrency(amount)} (${category})`;

}

// testing it 
console.log(createExpenseSummary("lunch", 15.50,"food"));
console.log(createExpenseSummary("gas", 45.00,"Transport"));
