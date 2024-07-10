## Bootstrap Lecture

### Introduction to Bootstrap

Bootstrap is a popular front-end framework that helps in creating responsive and mobile-first websites quickly and efficiently. It includes HTML, CSS, and JavaScript components.

### Getting Started with Bootstrap

1. **Including Bootstrap in Your Project**

   You can include Bootstrap in your project by using the Bootstrap CDN or by downloading the Bootstrap files.

   **Using Bootstrap CDN:**

   ```html
   <link
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
     rel="stylesheet"
     integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
     crossorigin="anonymous"
   />

   <script
     src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
     integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
     crossorigin="anonymous"
   ></script>
   ```

2. **Basic Structure**

   A basic Bootstrap HTML template:

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Bootstrap Example</title>
       <link
         href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
         rel="stylesheet"
         integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
         crossorigin="anonymous"
       />
     </head>
     <body>
       <div class="container">
         <h1 class="text-center">Hello, Bootstrap!</h1>
       </div>
       <script
         src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
         integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
         crossorigin="anonymous"
       ></script>
     </body>
   </html>
   ```

### Bootstrap Components

1. **Grid System**

   The Bootstrap grid system is based on a 12-column layout and is fully responsive.

   ```html
   <div class="container">
     <div class="row">
       <div class="col-md-4">Column 1</div>
       <div class="col-md-4">Column 2</div>
       <div class="col-md-4">Column 3</div>
     </div>
   </div>
   ```

2. **Navigation Bar**

   ```html
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <a class="navbar-brand" href="#">Navbar</a>
     <button
       class="navbar-toggler"
       type="button"
       data-toggle="collapse"
       data-target="#navbarNav"
       aria-controls="navbarNav"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav">
         <li class="nav-item active">
           <a class="nav-link" href="#"
             >Home <span class="sr-only">(current)</span></a
           >
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Features</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Pricing</a>
         </li>
       </ul>
     </div>
   </nav>
   ```

3. **Buttons**

   ```html
   <button type="button" class="btn btn-primary">Primary Button</button>
   <button type="button" class="btn btn-secondary">Secondary Button</button>
   <button type="button" class="btn btn-success">Success Button</button>
   ```

4. **Forms**

   ```html
   <form>
     <div class="form-group">
       <label for="exampleInputEmail1">Email address</label>
       <input
         type="email"
         class="form-control"
         id="exampleInputEmail1"
         aria-describedby="emailHelp"
       />
       <small id="emailHelp" class="form-text text-muted"
         >We'll never share your email with anyone else.</small
       >
     </div>
     <div class="form-group">
       <label for="exampleInputPassword1">Password</label>
       <input type="password" class="form-control" id="exampleInputPassword1" />
     </div>
     <button type="submit" class="btn btn-primary">Submit</button>
   </form>
   ```

### Examples

Here are some examples of Bootstrap components in action.

**Grid Example:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Grid Example</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-4 bg-primary text-white">Column 1</div>
        <div class="col-md-4 bg-secondary text-white">Column 2</div>
        <div class="col-md-4 bg-success text-white">Column 3</div>
      </div>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Navbar Example:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Navbar Example</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

### Tasks for Students

1. **Task 1: Create a Responsive Layout**

   Create a responsive webpage using Bootstrap's grid system. The page should have a header, a three-column layout for content, and a footer. Ensure that the columns stack vertically on smaller screens.

2. **Task 2: Build a Navigation Bar**

   Build a responsive navigation bar using Bootstrap. The navbar should include links to Home, About, Services, and Contact pages. Include a dropdown menu in the Services link.

3. **Task 3: Create a Form**

   Create a form using Bootstrap's form components. The form should include fields for name, email, password, and a submit button. Style the form using Bootstrap classes.

4. **Task 4: Use Bootstrap Components**

   Create a webpage that uses various Bootstrap components such as buttons, cards, and alerts. Ensure that the page is responsive and visually appealing.

---

This content provides a comprehensive introduction to Bootstrap, example code to demonstrate its use, and tasks for students to practice what they've learned.
