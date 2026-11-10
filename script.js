
// 1. VARIABLES

let budget = 0;

const expenses = [];

// 2. GET HTML ELEMENTS

const budgetDisplay = document.getElementById("budget");
const expensesDisplay = document.getElementById("totalExpenses");
const balanceDisplay = document.getElementById("balance");

const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

// Format money in Kenyan Shillings
function formatMoney(amount) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES"
    }).format(amount);
}

// 3. COLLECT USER BUDGET

document.getElementById("setBudget").addEventListener("click", function() {

    let userBudget = prompt("Enter your monthly budget in KSh:");

    if (userBudget === null) {
        return;
    }

    let amount = Number(userBudget);

    if (userBudget.trim() === "" || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

    budget = amount;

    updateDashboard();
});

// 4. CALCULATE TOTAL EXPENSES

function calculateTotalExpenses() {

    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}

// 5. CALCULATE REMAINING BALANCE

function calculateBalance() {

    let total = calculateTotalExpenses();

    return budget - total;
}

// 6. ADD EXPENSES

expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("expenseName").value.trim();

    let amount = Number(document.getElementById("expenseAmount").value);

    if (name === "" || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    const expense = {
        name: name,
        amount: amount
    };

    expenses.push(expense);

    expenseForm.reset();

    updateDashboard();
});

// 7. DISPLAY EXPENSES

function displayExpenses() {

    expenseList.innerHTML = "";

    expenses.forEach(function(expense, index) {

        let item = document.createElement("li");

        item.textContent =
            expense.name + " - " + formatMoney(expense.amount);

        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        deleteButton.addEventListener("click", function() {

            expenses.splice(index, 1);

            updateDashboard();
        });

        item.appendChild(deleteButton);

        expenseList.appendChild(item);
    });
}

// 8. UPDATE DASHBOARD

function updateDashboard() {

    let total = calculateTotalExpenses();

    let remaining = calculateBalance();

    budgetDisplay.textContent = formatMoney(budget);

    expensesDisplay.textContent = formatMoney(total);

    balanceDisplay.textContent = formatMoney(remaining);

    displayExpenses();

    // Display results in the browser console

    console.clear();

    console.log("SPENDWISE BUDGET SUMMARY");

    console.log("Monthly Budget:", formatMoney(budget));

    console.log("Total Expenses:", formatMoney(total));

    console.log("Remaining Balance:", formatMoney(remaining));
}

// 9. INITIAL DISPLAY

updateDashboard();
