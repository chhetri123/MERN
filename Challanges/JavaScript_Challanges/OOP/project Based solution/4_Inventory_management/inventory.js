// Product class to define the properties of a product
class Product {
  constructor(name, category, quantity, price) {
    this.name = name; // Name of the product
    this.category = category; // Category to which the product belongs
    this.quantity = quantity; // Quantity of the product in stock
    this.price = price; // Price per unit of the product
    this.dateAdded = new Date(); // Date when the product was added to inventory
    this.id = Math.random().toString(36).substr(2, 9); // Unique ID for the product
  }
  getTotalValue() {
    return this.quantity * this.price;
  }
}

// Inventory class to handle the inventory operations
class Inventory {
  constructor() {
    this.products = []; // Array to hold all products in the inventory
  }

  // Method to add a new product to the inventory
  addProduct(product) {
    this.products.push(product); // Add the product object to the products array
    this.displayProducts(); // Update the display after adding the product
  }

  // Method to delete a product from the inventory by its ID
  deleteProduct(id) {
    this.products = this.products.filter((product) => product.id !== id); // Filter out the product with the given ID
    this.displayProducts(); // Update the display after deleting the product
  }

  // Method to update product details by its ID
  updateProduct(id, updatedProduct) {
    const { name, category, quantity, price } = updatedProduct;
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );

    //
    const product = this.products[productIndex];
    const newUpdatedProduct = new Product(name, category, quantity, price);
    // Update the matching product with new details
    newUpdatedProduct.id = product.id;
    newUpdatedProduct.dateAdded = product.dateAdded;

    //
    this.products[productIndex] = newUpdatedProduct; // Replace the old product with the updated product object in the products array

    this.displayProducts(); // Update the display after updating the product
  }

  updateSummary() {
    const totalProducts = this.products.length;
    const totalQuantity = this.products.reduce(
      (sum, item) => sum + +item.quantity,
      0
    );
    const totalValue = this.products
      .reduce((sum, item) => {
        return sum + item.getTotalValue();
      }, 0)
      .toFixed(2);

    document.getElementById(
      "totalProducts"
    ).innerText = `Total Products: ${totalProducts}`;
    document.getElementById(
      "totalQuantity"
    ).innerText = `Total Quantity: ${totalQuantity}`;
    document.getElementById(
      "totalValue"
    ).innerText = `Total Value: $${totalValue}`;
  }

  // Method to display all products in the inventory
  displayProducts() {
    const productTable = document.getElementById("product-table-body"); // Get the table body element to display products
    productTable.innerHTML = ""; // Clear the existing table rows

    // Loop through the products array and create table rows for each product
    this.products.forEach((product) => {
      const row = document.createElement("tr"); // Create a new table row

      // Create table cells for each product attribute and add them to the row
      row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.quantity}</td>
        <td>${product.price}</td>
        <td>${product.dateAdded.toLocaleDateString()}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="inventory.editProduct('${
            product.id
          }')">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="inventory.deleteProduct('${
            product.id
          }')">Delete</button>
        </td>
      `;

      productTable.appendChild(row);
      // Add the row to the table body
    });
    this.updateSummary(); // Update the inventory summary
  }

  // Method to populate the form fields for editing a product
  editProduct(id) {
    const product = this.products.find((product) => product.id === id); // Find the product by ID
    if (product) {
      document.getElementById("name").value = product.name; // Set the name input field
      document.getElementById("category").value = product.category; // Set the category input field
      document.getElementById("quantity").value = product.quantity; // Set the quantity input field
      document.getElementById("price").value = product.price; // Set the price input field
      document.getElementById("product-id").value = product.id; // Set the hidden product ID field
    }
  }

  // Method to handle the form submission for adding/updating a product
  handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value; // Get the product name from the input field
    const category = document.getElementById("category").value; // Get the category from the input field
    const quantity = document.getElementById("quantity").value; // Get the quantity from the input field
    const price = document.getElementById("price").value; // Get the price from the input field
    const id = document.getElementById("product-id").value; // Get the product ID from the hidden input field

    if (id) {
      // If the ID exists, update the existing product
      this.updateProduct(id, { name, category, quantity, price });
    } else {
      // If the ID does not exist, create a new product

      const newProduct = new Product(name, category, quantity, price);
      this.addProduct(newProduct);
    }

    this.clearForm(); // Clear the form after submission
  }

  // Method to clear the form fields after submission
  clearForm() {
    document.getElementById("name").value = ""; // Clear the name input field
    document.getElementById("category").value = ""; // Clear the category input field
    document.getElementById("quantity").value = ""; // Clear the quantity input field
    document.getElementById("price").value = ""; // Clear the price input field
    document.getElementById("product-id").value = ""; // Clear the hidden product ID field
  }
}

// Instantiate the Inventory class
const inventory = new Inventory();

// Attach the form submission handler to the form
document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    inventory.handleFormSubmit(event); // Call the handleFormSubmit method on form submission
  });
