# OOP in JavaScript - Coding Challenges

## Constructor Function and Prototype Challenges

### Challenge 1: Book Management System

Create a constructor function `Book` to manage book details such as title, author, and genre. Implement a prototype method `describe` to return a string describing the book.

### Challenge 2: Vehicle Inventory

Create a constructor function `Vehicle` to manage vehicle details like make, model, and year. Implement a prototype method `getAge` to return the vehicle's age.

### Challenge 3: Bank Account Management

Create a constructor function `BankAccount` for managing bank accounts with properties like accountNumber, accountHolder, and balance. Implement prototype methods `deposit` and `withdraw`.

### Challenge 4: Employee Records

Create a constructor function `Employee` to manage employee details like name, position, and salary. Implement a prototype method `getAnnualSalary` to calculate the annual salary.

### Challenge 5: Library System

Create a constructor function `Library` to manage books in a library. Implement prototype methods `addBook`, `removeBook`, and `findBook` by title.

### Challenge 6: Task Management

Create a constructor function `Task` to manage tasks with properties like title, description, and status. Implement prototype methods `completeTask` and `isComplete`.

### Challenge 7: Shopping Cart

Create a constructor function `ShoppingCart` to manage items in a shopping cart. Implement prototype methods `addItem`, `removeItem`, and `calculateTotal`.

### Challenge 8: Movie Database

Create a constructor function `Movie` to manage movie details like title, director, and year. Implement a prototype method `getMovieInfo`.

### Challenge 9: Student Management

Create a constructor function `Student` to manage student details like name, age, and grades. Implement prototype methods `addGrade`, `getAverageGrade`, and `getDetails`.

### Challenge 10: Restaurant Menu

Create a constructor function `MenuItem` to manage menu item details like name, category, and price. Implement a prototype method `getDetails`.

### Challenge 11: Order Management

Create a constructor function `Order` to manage order details like orderNumber, customerName, and items. Implement prototype methods `addItem` and `getTotal`.

### Challenge 12: Pet Management

Create a constructor function `Pet` to manage pet details like name, type, and age. Implement prototype methods `describe` and `celebrateBirthday`.

# Classes

### Challenge 1: Creating Classes and Instances

1. Create a `Car` class with properties `make`, `model`, and `year`. Instantiate two `Car` objects and log their properties.

### Challenge 2: Adding Methods to Classes

2. Add a method `getCarInfo` to the `Car` class that returns a string with the car's make, model, and year. Call this method on both car objects.

### Challenge 3: Using Inheritance

3. Create a `ElectricCar` class that inherits from `Car` and adds a property `batteryCapacity`. Instantiate an `ElectricCar` object and log its properties.

### Challenge 4: Overriding Methods

4. Override the `getCarInfo` method in the `ElectricCar` class to include battery capacity. Call this method on an `ElectricCar` object.

### Challenge 5: Encapsulation with Constructor Functions

5. Create a `BankAccount` constructor function with private properties `balance` and a method `deposit` to increase the balance. Log the balance after making a deposit.

### Challenge 6: Encapsulation with ES6 Classes

6. Rewrite the `BankAccount` example using ES6 classes and private fields. Ensure the balance is protected.

### Challenge 7: Using Getters and Setters

7. Add a getter `getBalance` and a setter `setBalance` to the `BankAccount` class to retrieve and update the balance. Demonstrate their usage.

### Challenge 8: Method Chaining

8. Create a `Library` class with methods `addBook`, `removeBook`, and `getBooks`. Allow method chaining and demonstrate it.

### Challenge 9: Static Methods

9. Add a static method `compareAge` to a `Person` class that compares the age of two person objects. Demonstrate its usage.

### Challenge 10: Prototypal Inheritance

10. Create an object `animal` with a method `speak`. Create another object `dog` that inherits from `animal` and overrides `speak`. Demonstrate both methods.

### Challenge 11: `Object.create`

11. Use `Object.create` to create a `cat` object that inherits from `animal` and has its own method `meow`. Demonstrate inheritance and method calling.

### Challenge 12: Inheriting Built-In Objects

12. Extend the `Array` prototype with a method `last` that returns the last element of the array. Demonstrate its usage.

### Challenge 13: Implementing Polymorphism

13. Create a base class `Shape` with a method `area`. Create subclasses `Circle` and `Square` that override the `area` method. Demonstrate polymorphism.

### Challenge 14: Abstract Classes and Methods

14. Create an abstract class `Animal` with an abstract method `makeSound`. Subclasses `Dog` and `Cat` should implement `makeSound`. Demonstrate usage.

### Challenge 15: Aggregation

15. Create classes `Book` and `Author`. Each book should have an author. Demonstrate the relationship by creating instances.

### Challenge 16: Composition

16. Create a class `Engine` and a class `Car` that has an engine. Demonstrate composition by creating instances and showing the relationship.

## Project Based Challange

### Question 1: To-Do List Manager

**Scenario:**
You are building a to-do list manager for a productivity app. The app should allow users to add tasks, remove tasks, mark tasks as completed, filter tasks by their status (completed/incomplete), and display the total count of tasks.

**Instructions:**

1. **Task Class:**

   - Implement a `Task` class with the following properties and methods:
     - **Properties:**
       - `description` (string): The text of the task.
       - `completed` (boolean): Indicates whether the task is completed.
     - **Methods:**
       - `markCompleted()`: Sets the `completed` property to `true`.

2. **ToDoList Class:**

   - Create a `ToDoList` class to manage an array of `Task` objects.
   - **Methods:**
     - `addTask(description)`: Adds a new `Task` with the given description to the list.
     - `removeTask(index)`: Removes the task at the specified index.
     - `markTaskCompleted(index)`: Marks the task at the specified index as completed.
     - `getTotalCount()`: Returns the total number of tasks in the list.
     - `filterTasksByStatus(status)`: Filters tasks based on their completion status. (`status` can be `'completed'` or `'incomplete'`.)

3. **DOM Manipulation:**

   - Set up an HTML page with the following elements:
     - An input field with the ID `taskDescription` for entering new tasks.
     - A button with the ID `addTaskButton` to add the new task.
     - An unordered list with the ID `taskList` to display tasks.
     - A span with the ID `totalCount` to show the total number of tasks.
   - Use JavaScript to:
     - Add an event listener to the `addTaskButton` that retrieves the value from the `taskDescription` input field, adds it as a new task, clears the input field, and updates the displayed task list.
     - Implement the `displayTasks()` function to:
       - Clear the current list.
       - Create a list item (`<li>`) for each task, with a button to mark the task as completed.
       - Add the class `completed` to completed tasks for styling.
       - Append the task items and buttons to the `taskList`.
       - Update the `totalCount` span with the total number of tasks.

4. **Additional Features:**
   - Implement task filtering functionality. Add a dropdown or set of buttons to filter tasks based on their completion status (e.g., "All", "Completed", "Incomplete"). Update the displayed task list based on the selected filter.

**Example HTML Structure:**

- Use solution index.html file

**JavaScript Requirements:**

- Implement the `Task` and `ToDoList` classes in `script.js`.
- Ensure that your code effectively interacts with the HTML elements and updates the task list and total count as specified.

**Hints:**

- Use `document.createElement` to create new DOM elements.
- Use `element.appendChild` to add elements to the DOM.
- Update the `displayTasks` function to handle task filtering based on status.

### Question 2: Library System

**Scenario:**
You are creating a library system that allows users to manage their book collections. The system should allow users to add books, remove books, search for books by title, and display the total number of books. Additionally, users should be able to filter books by their reading status (read/unread).

**Requirements:**

1. Create a `Book` class with properties for the book title, author, and reading status.
2. Implement a `Library` class that manages an array of `Book` objects.
3. Provide methods to add a new book, remove a book by its title, search for books by title, and filter books by their reading status.
4. Implement a method to get the total count of books.
5. Use DOM manipulation to display the list of books, their details, and the total book count on the web page.

### Question 3: Expense Tracker

**Scenario:**
You are creating an expense tracker application to help users manage their expenses. The application should allow users to add expenses, remove expenses, categorize expenses, filter expenses by category, and display the total amount spent.

**Requirements:**

1. Create an `Expense` class with properties for the expense description, amount, and category.
2. Implement an `ExpenseTracker` class that manages an array of `Expense` objects.
3. Provide methods to add a new expense, remove an expense by its description, categorize expenses, and filter expenses by category.
4. Implement a method to calculate and display the total amount spent.
5. Use DOM manipulation to display the list of expenses, their details, and the total amount spent on the web page.

### Question 4: Inventory Management System

**Scenario:**
You are developing an inventory management system for a small business. The system should track products, add new products, remove products, update product quantities, and display products based on their quantity status (in stock/out of stock).

**Requirements:**

1. Create a `Product` class with properties for the product name, quantity, and a method to update the quantity.
2. Implement an `Inventory` class that manages an array of `Product` objects.
3. Provide methods to add a new product, remove a product by its name, update a product’s quantity, and filter products based on their quantity status.
4. Implement a method to display the total number of products.
5. Use DOM manipulation to display the list of products and their quantities on the web page.
