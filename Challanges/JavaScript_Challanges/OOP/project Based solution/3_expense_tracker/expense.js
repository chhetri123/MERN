class Expense {
  constructor(name, amount, category) {
    this.name = name;
    this.amount = parseFloat(amount);
    this.category = category;
  }
}

class ExpenseTracker {
  constructor() {
    this.expenses = [];
  }

  addExpense(name, amount, category) {
    this.expenses.push(new Expense(name, amount, category));
  }

  removeExpense(index) {
    this.expenses.splice(index, 1);
  }

  getTotalExpense() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  displayExpenses() {
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";
    this.expenses.forEach((expense, index) => {
      const expenseItem = document.createElement("div");
      expenseItem.className = "expense-item";

      expenseItem.innerHTML = `
        <div>
          <strong>${expense.name}</strong>
          <small class="text-muted">(${expense.category})</small>
        </div>
        <div class="amount">$${expense.amount.toFixed(2)}</div>
        <button class="btn btn-danger btn-sm" onclick="removeExpense(${index})">Remove</button>
      `;

      expenseList.appendChild(expenseItem);
    });

    document.getElementById(
      "totalExpense"
    ).textContent = `Total Expense: $${this.getTotalExpense().toFixed(2)}`;
  }
}

// DOM Manipulation
const expenseTracker = new ExpenseTracker();

document.getElementById("addExpenseButton").addEventListener("click", () => {
  const expenseName = document.getElementById("expenseName").value;
  const expenseAmount = document.getElementById("expenseAmount").value;
  const expenseCategory = document.getElementById("expenseCategory").value;

  if (expenseName.trim() && expenseAmount > 0) {
    expenseTracker.addExpense(expenseName, expenseAmount, expenseCategory);
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseCategory").value = "Food";
    expenseTracker.displayExpenses();
  }
});

function removeExpense(index) {
  expenseTracker.removeExpense(index);
  expenseTracker.displayExpenses();
}

expenseTracker.displayExpenses();
