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


// utility functions 
function generateId() {
    return Date.now();
}

function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = string(today.getMonth() + 1).padStart(2,'0');
    const day = string(today.getDate()).padStart(2,'0');
    return `${year}- ${month} - ${day}`;
}

dateInput.value = getCurrentDate();
//Expense Function

function createExpenseObject(description,amount,category,date) {
    return{
        id: generateId(),
        description: description,
        amount:parseFloat(amount),
        category: category,
        date: date
    };
}

const expense1 = {
    id: 1,
    description: "Grocery Shopping",
    amount: 45.50,
    category: "food",
    date: "2026-01-12"
};

const expense2 = {
    id: 2,
    description: "Gas",
    amount: 35.00,
    category: "transport",
    date: "2026-01-12"
};

// Add to array
expenses.push(expense1);
expenses.push(expense2);

console.log("All Expenses:", expenses);
console.log("Number of expenses:", expenses.length);
console.log("First expense:", expenses[0]);
console.log("First expense description:", expenses[0].description);


// Loop through expenses
expenses.forEach(expense => {
    console.log(`${expense.description}: ${formatCurrency(expense.amount)}`);
});

// Test createExpenseObject function
const testExpense = createExpenseObject("Test Item", 10.50, "food", "2026-01-15");
console.log("Created expense:", testExpense);