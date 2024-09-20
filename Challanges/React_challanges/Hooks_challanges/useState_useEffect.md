### **Challenge 1: Click Counter with Reset**

**Goal**: Build a button that tracks how many times it has been clicked and adds a reset button.

**Instructions**:

1. Create a functional component called `ClickCounter`.
2. Use the `useState` hook to track the number of times the button is clicked.
3. Display the count in a paragraph (`<p>`).
4. Add a button that, when clicked, increments the count by 1.
5. Add another button labeled "Reset" that, when clicked, resets the count to 0.
6. Render both buttons and the count on the screen.

---

### **Challenge 2: Name Input Form with Live Update**

**Goal**: Create a form where the user can input their name and see it displayed live as they type.

**Instructions**:

1. Create a component called `LiveNameDisplay`.
2. Use the `useState` hook to track the user's input.
3. Add an `<input>` field where the user can type their name.
4. Display the user's name below the input field in a `<p>` element.
5. Use the `onChange` event to update the state every time the user types in the input field.
6. If the input is empty, display "Please enter your name" instead of the user's name.

---

### **Challenge 3: Timer with Start/Stop**

**Goal**: Create a timer that starts when a button is clicked and can be stopped by another button.

**Instructions**:

1. Create a functional component called `Timer`.
2. Use the `useState` hook to track the number of seconds that have passed.
3. Use the `useEffect` hook to start a timer when the "Start" button is clicked.
4. Display the number of seconds in a `<p>` element.
5. Add a "Start" button that, when clicked, starts the timer.
6. Add a "Stop" button that stops the timer when clicked.
7. Ensure that the timer stops when the component is unmounted (hint: use a cleanup function inside `useEffect`).

---

### **Challenge 4: Fetch and Display Data from API**

**Goal**: Fetch data from an API and display it inside the component.

**Instructions**:

1. Create a component called `DataDisplay`.
2. Use the `useEffect` hook to fetch data from the following API: `https://jsonplaceholder.typicode.com/posts/1`.
3. Use `useState` to store the fetched data.
4. While the data is being fetched, display "Loading..." in the component.
5. Once the data is fetched, display the post title in a `<h3>` element and the body in a `<p>` element.
6. Ensure that the API call happens only once when the component mounts.

---

### **Challenge 5: Toggle Dark Mode**

**Goal**: Build a toggle button that switches between light and dark mode.

**Instructions**:

1. Create a component called `ThemeToggle`.
2. Use the `useState` hook to track whether the theme is "light" or "dark".
3. Display the current theme (either "Light Mode" or "Dark Mode") in a `<p>` element.
4. Add a button that, when clicked, toggles the theme between "light" and "dark".
5. Use inline styles to change the background color and text color based on the current theme.
   - For **light mode**: background color should be white, and text should be black.
   - For **dark mode**: background color should be black, and text should be white.
6. Ensure the theme is updated immediately when the button is clicked.

### **Enhanced Challenge 1: Blog Post Project with Like and Comment Feature**

**Goal**: Extend the blog post project to allow users to "like" blog posts and add comments.

#### **Added Features**:

1. **Like Button**:
   - Each blog post should have a "Like" button.
   - Clicking the "Like" button increases the number of likes for that post.
   - Display the current number of likes for each post.
2. **Add Comment Section**:

   - Each blog post should have a comment section where users can add comments.
   - Use a form with an input field for users to type their comment and a button to submit the comment.
   - Display the list of comments under each blog post.

3. **Persist Comments**:
   - Use `useState` to manage the state of likes and comments.
   - Add a real-time update when a new comment is added or a post is liked.

#### **Instructions**:

1. Add a **"Like" button** inside each `BlogPost` component.
   - Use `useState` to store and update the number of likes.
   - Every time the button is clicked, increment the likes count.
2. Add a **comment input form** inside each `BlogPost` component.
   - Use `useState` to store the value of the comment input field and the list of comments.
   - When the user submits a comment, update the state to include the new comment.
3. Display the list of comments below the blog post.

Here’s a simplified version of the **Movie Library** project without using callback props or complex state handling like reviews. The challenge will focus on using `useState`, `useEffect`, and passing props in a beginner-friendly way.

---

### Project: Movie Library with Rating and SortingS

**Goal**: Build a basic "Movie Library" app where users can view a list of movies, rate each movie (locally in the UI), and sort the movies based on their ratings.

---

### **Project Instructions**:

#### **Project Overview**:

- Create a "Movie Library" where users can:
  1. View a list of movies.
  2. Manually add a rating for each movie.
  3. Sort the movies by their rating.
  4. Use `useEffect` to simulate fetching movie data when the app first loads
     - https://freetestapi.com/api/v1/movies ( use this api to fetech movies data )

#### **Step 1: Set up the Main Component (`App`)**

1. Use `useState` to create a state variable for the list of movies. Each movie should have the following fields:
   - `title`: The name of the movie.
   - `description`: A short description of the movie.
   - `rating`: A number representing the movie's rating (initially 0 or null).
2. Use `useEffect` to simulate fetching movie data from an external source when the app loads. You can use static movie data here.

#### **Step 2: Create the `MovieList` Component**

1. Pass the movie list from the `App` component to `MovieList` as props.
2. In `MovieList`, render multiple `MovieCard` components, one for each movie.
3. Pass the movie’s title, description, and rating as props to `MovieCard`.

#### **Step 3: Create the `MovieCard` Component**

1. Display the movie’s title, description, and rating (or "No rating yet" if no rating has been set).
2. You can add like button . save the likes in the useState .

### Advance One :

- You can add movie sorting functionality
- Use Tailwind Css For styling. UI should look more professional.
