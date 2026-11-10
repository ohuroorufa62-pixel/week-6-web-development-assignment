
# SpendWise - Interactive Budget Tracker

## Project Description

SpendWise is a simple budgeting application developed
using HTML, CSS and JavaScript.

The application helps users manage their monthly budgets,
record expenses and monitor their spending.

## Improvements Made This Week

During Week 6, I improved SpendWise by adding interactive
JavaScript features.

The improvements include:

- Adding new expenses.
- Deleting existing expenses.
- Setting and updating a monthly budget.
- Calculating total expenses automatically.
- Displaying the remaining budget.
- Showing budget warning messages.
- Filtering expenses by category.
- Saving information using localStorage.
- Updating the dashboard without refreshing the page.

## 1. Conditional Statements

I used if, else if and else statements to make decisions
based on the user's spending.

For example, when total expenses exceed the monthly
budget, the application displays a warning message.

It also warns users when they have used 80% of their budget.

This helps users understand their financial situation.

## 2. Arrays

I used an array called expenses to store multiple expense
records.

Each expense contains:

- Expense name
- Amount
- Category
- Date
- Unique ID

I used the push() method to add new expenses to the array.

I also used the filter() method to delete records and
display expenses according to their categories.

## 3. Loops

I used for loops to process expense records.

The loops help calculate total expenses and display
multiple records in the expense table.

This makes it easier to manage many expenses without
creating separate variables for each record.

## 4. DOM Manipulation

I used JavaScript DOM manipulation to update the webpage.

For example, the application updates:

- Monthly budget
- Total expenses
- Remaining balance
- Budget status messages
- Expense history

I used methods such as getElementById(),
createElement(), appendChild() and textContent.

## 5. Event Listeners

I used event listeners to respond to user actions.

The application responds when users:

- Submit the expense form.
- Update their monthly budget.
- Delete an expense.
- Change the expense category filter.

I used addEventListener() to handle these interactions.

## 6. Challenges and Solutions

One challenge was updating the dashboard whenever a
new expense was added or deleted.

I solved this by creating functions that calculate
the total expenses and refresh the dashboard.

Another challenge was keeping expense information
after refreshing the webpage.

I solved this by using localStorage to save the
budget and expense records in the browser.

I also used conditional statements to display
appropriate messages when users approach or exceed
their budgets.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser localStorage

## How to Run the Project

1. Download or clone the repository.
2. Open the SpendWise folder.
3. Open index.html in a web browser.
4. Set your monthly budget.
5. Add expenses and monitor your spending.

## Conclusion

This project helped me understand how JavaScript
makes webpages interactive.

I learned how to use variables, arrays, loops,
conditional statements, DOM manipulation and
event listeners to build a functional budgeting
application.

## Author

SpendWise Week 6 Web Development Assignment.
