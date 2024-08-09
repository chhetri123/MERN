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
