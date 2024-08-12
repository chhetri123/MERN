# Mini Project

## Project Description

Create a React application using Vite and Tailwind CSS to display a gallery of movies. The application should have a professional and stylish UI, showcasing each movie in a card format with essential details. The Movies page should include a list of movies fetched from a mock or real API endpoint.

### Requirements

1. **Home Page:**

   - Design a landing page with a welcoming message.

2. **Form Page:**

   - Create a form where users can add tasks with fields such as title, description, and status.
   - Generate a random ID for each task and store the task data in local storage.

3. **Details Page:**

   - Display a list of tasks created from the form.
   - Allow users to edit, delete, and update the status of tasks.

4. **Movies Page:**
   - Fetch movie data (title, year, genre, rating, plot, poster) from an API or a mock dataset.
   - Display each movie in a card layout with a stylish and professional UI.
   - Use Tailwind CSS for styling the components.

# Folder structure

```
your_project_name/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── MovieList.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Form.jsx
│   │   ├── Details.jsx
│   │   ├── Movies.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

### Installation Steps

1. **Install react app :**

   ```bash
   npm create vite@latest your-project-name --template react
   cd your-project-name
   npm install

   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Tailwind CSS:**

   - Install Tailwind CSS and its dependencies:

     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```

   - Configure Tailwind in `tailwind.config.js`:

     ```javascript
     module.exports = {
       content: ["./index.html", "./src/**/*.{js,jsx}"],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```

   - Add Tailwind directives to `src/index.css`:

     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. **Start the Development Server:**

   ```bash
   npm run dev
   ```

## Add Features

```
src/
│
├── components/
│   ├── WelcomeMessage.js
│   ├── MotivationalQuote.js
│   ├── TaskSummary.js
│
│
│
├── App.js
└── index.js

```

### 1. **Welcome Message with User's Name (useState, useEffect)**

- **Feature:** Display a personalized welcome message using the user's name.
- **Implementation:**
  - Prompt the user to enter their name on their first visit.
  - Use `useState` to store the user's name and display it in the welcome message.
  - Use `useEffect` to save the name in local storage and retrieve it on subsequent visits.

### 2. **Daily Motivational Quote (useState, useEffect)**

- **Feature:** Display a daily motivational quote to inspire users.
- **Implementation:**

  - Use `useState` to manage the displayed quote.
  - Use `useEffect` to fetch a new quote daily from a local array or a public API.
  - Display the quote prominently on the Home page.

  ```js
  const quotes = [
    "Believe in yourself!",
    "You can do it!",
    "Stay positive and keep pushing forward.",
    "Every day is a new opportunity.",
    "Make today great!",
  ];
  ```

### 3. **Task Summary (useState, useEffect)**

- **Feature:** Show a summary of the user's tasks, such as the total number of tasks, completed tasks, and pending tasks.
- **Implementation:**

  - Use `useState` to calculate and store the task summary.
  - Use `useEffect` to update the summary whenever tasks are added, completed, or deleted.
  - Display the summary as a visual widget or text block on the Home page.
