### Challenge 1: User Preferences Storage

**Objective:** Create a web application that stores user preferences using cookies.

**Instructions:**

1. **Setup:**

   - Create a simple HTML page( use EJS ) with a form that allows users to select their preferences, such as theme (light/dark), font size, and language.( you can use the templated provided in solution)

   - Use JavaScript to handle form submission and store the preferences in cookies.

2. **Task:**

   - When the user submits the form, save the preferences as cookies with appropriate expiration dates (e.g., 7 days).
   - Upon loading the page, check if the cookies exist and apply the saved preferences automatically (e.g., set the theme, font size, and language based on the cookies).

3. **Testing:**

   - Test the application by selecting different preferences and reloading the page to ensure the settings persist.
   - Implement a "Reset Preferences" button that clears the cookies and resets the page to its default state.

4. **Extra Challenge:**
   - Add a feature to let users choose how long the cookies should last (e.g., 1 day, 1 week, 1 month).

```
/preferences-app
  /views
    - index.ejs
  /public
    - styles.css
  - app.js
  - package.json

```

---

### Challenge 2: Remember Me Login Functionality

**Objective:** Implement a "Remember Me" feature in a login form using cookies.

**Instructions:**

1. **Setup:**

   - Create a login form with fields for the username and password, along with a "Remember Me" checkbox.

2. **Task:**

   - When the "Remember Me" checkbox is checked, store the username in a cookie with an expiration date of 30 days upon successful login.
   - On subsequent visits, if the cookie exists, automatically fill in the username field with the stored value.
   - Ensure the password is not stored in the cookie for security reasons.

3. **Testing:**

   - Test the functionality by logging in with the "Remember Me" option selected and reloading the page to see if the username is pre-filled.
   - Test what happens if the "Remember Me" option is not selected.

4. **Extra Challenge:**
   - Implement a "Logout" button that clears the cookies when clicked.

```
/remember-me-app
  /views
    - login.ejs
  - app.js
  - package.json
```

---

### Challenge 3: Shopping Cart Persistence

**Objective:** Develop a simple shopping cart that persists between sessions using cookies.

**Instructions:**

1. **Setup:**

   - Create a basic e-commerce page with a list of products. Each product should have an "Add to Cart" button.
   - Include a "View Cart" button that displays the current items in the cart.

2. **Task:**

   - When a user adds a product to the cart, store the product details (e.g., ID, name, quantity) in a cookie.
   - If the user navigates away or reloads the page, the cart contents should persist using the stored cookies.
   - The "View Cart" page should display all items stored in the cookie and allow users to adjust quantities or remove items.

3. **Testing:**

   - Test adding items to the cart, viewing the cart, and ensuring the items persist after reloading the page.
   - Test updating item quantities and removing items to ensure the cookie data is correctly updated.

4. **Extra Challenge:**
   - Implement a feature to clear the entire cart, which should remove the relevant cookies.

```
/shopping-cart-app
  /views
    - index.ejs
    - cart.ejs
  - app.js
  - package.json

```

---
