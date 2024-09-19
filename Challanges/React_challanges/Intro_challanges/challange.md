### Challenge 1: Create a "Welcome" Component

**Goal**: Create a simple React component that takes a name as a prop and displays a welcome message.

**Instructions**:

1. Create a new component called `Welcome` inside the `src` folder.
2. The component should receive a `name` as a prop.
3. It should render a message that says **"Welcome, [name]!"**, where `[name]` is the value passed as a prop.
4. Use this `Welcome` component inside your `App.js` file and pass different names to display multiple welcome messages.

**Example**:

- When you pass `{name: "Alice"}`, the output should be: "Welcome, Alice!"

---

### Challenge 2: Display a List of Students

**Goal**: Create a component that displays a list of student names passed as props.

**Instructions**:

1. Create a new component called `StudentList`.
2. The `StudentList` component should receive a prop called `students`, which is an array of strings (student names).
3. Inside `StudentList`, render a list (`<ul>`) where each student's name is an individual list item (`<li>`).
4. Pass an array of student names to `StudentList` inside `App.js`.

**Example**:

- If the array `["Alice", "Bob", "Charlie"]` is passed as a prop, it should display:
  - Alice
  - Bob
  - Charlie

---

### Challenge 3: Create a "Profile Card" Component

**Goal**: Create a React component that takes in several props and displays a user profile card.

**Instructions**:

1. Create a `ProfileCard` component.
2. The `ProfileCard` should take three props: `name`, `age`, and `bio`.
3. Inside the component, display the `name` as a heading, `age` in a paragraph, and `bio` in another paragraph.
4. Use the `ProfileCard` component inside `App.js` and pass different props to display different profiles.

**Example**:

- For `{name: "John", age: 30, bio: "Loves coding and hiking"}`, the profile should display:
  - **John**
  - Age: 30
  - Bio: Loves coding and hiking

---

### Challenge 4: "Product Card" Component

**Goal**: Create a product display component that shows product details using props.

**Instructions**:

1. Create a `ProductCard` component.
2. The `ProductCard` should receive the following props: `productName`, `price`, and `description`.
3. Render the product name as a heading, the price in a paragraph, and the description in another paragraph.
4. In `App.js`, use the `ProductCard` to display at least three different products.

**Example**:

- For `{productName: "Laptop", price: "$999", description: "A high-performance laptop"}`, it should display:
  - **Laptop**
  - Price: $999
  - Description: A high-performance laptop

---

### Challenge 5: "Movie List" Component

**Goal**: Create a component that displays a list of movies with their titles and years using props.

**Instructions**:

1. Create a component called `MovieList`.
2. The `MovieList` should take a prop called `movies`, which is an array of objects. Each object has two properties: `title` and `year`.
3. Inside `MovieList`, render a list (`<ul>`) where each movie's title and year are displayed in a list item (`<li>`).
4. Use the `MovieList` component in `App.js` and pass a list of at least three movies.

**Example**:

- For the array `[{title: "Inception", year: 2010}, {title: "The Matrix", year: 1999}]`, it should display:
  - Inception (2010)
  - The Matrix (1999)

---

Here are two slightly more advanced React challenges that focus on creating small projects. These will still use **components** and **props**, but require more thought in how the components work together.

---

### **Project 1: Build a "Blog Post" **

**Goal**: Create a simple blog layout using React components that display multiple blog posts using props.

#### Instructions:

1. Create a new component called `BlogPost`.
2. The `BlogPost` component should accept the following props:
   - `title` (string): The title of the blog post.
   - `author` (string): The name of the author.
   - `content` (string): The content/body of the post.
   - `date` (string): The date the blog was posted.
3. The component should display the blog post in a formatted layout:
   - **Title** as a heading.
   - **Author** and **date** underneath the title.
   - **Content** as a paragraph.
4. Create another component called `BlogFeed` which will display a list of blog posts. Pass an array of blog posts as props to `BlogFeed`.
   - Each blog post in the array should have `title`, `author`, `content`, and `date` properties.
   - Inside `BlogFeed`, map through the array and render a `BlogPost` for each blog entry.
5. Use the `BlogFeed` component inside `App.js` and pass at least three different blog posts.

#### Example:

```jsx
<BlogFeed
  posts={[
    {
      title: "Learning React",
      author: "Jane Doe",
      content: "React is a powerful tool...",
      date: "Sept 1, 2024",
    },
    {
      title: "JavaScript Tricks",
      author: "John Smith",
      content: "Let me share some cool JS tricks...",
      date: "Sept 2, 2024",
    },
    {
      title: "CSS Basics",
      author: "Emily Davis",
      content: "CSS can be fun and easy!",
      date: "Sept 3, 2024",
    },
  ]}
/>
```

---

### **Project 2: "Recipe Book" **

**Goal**: Build a recipe book app that displays a list of recipes, each showing ingredients and instructions using nested components and props.

#### Instructions:

1. Create a `RecipeCard` component that displays a single recipe. It should take the following props:
   - `title` (string): The name of the recipe.
   - `ingredients` (array of strings): A list of ingredients.
   - `instructions` (string): The instructions for preparing the recipe.
2. Inside `RecipeCard`:
   - Display the **title** as a heading.
   - Render the **ingredients** as an unordered list (`<ul>`).
   - Display the **instructions** as a paragraph below the ingredients.
3. Create another component called `RecipeBook` that receives an array of recipe objects as props. Each object will have `title`, `ingredients`, and `instructions` properties.
   - Inside `RecipeBook`, map through the array and render a `RecipeCard` for each recipe.
4. Use the `RecipeBook` component inside `App.js` and pass at least three different recipes.

#### Example:

```jsx
<RecipeBook
  recipes={[
    {
      title: "Pancakes",
      ingredients: ["Flour", "Milk", "Eggs", "Sugar"],
      instructions: "Mix all ingredients and fry.",
    },
    {
      title: "Spaghetti",
      ingredients: ["Pasta", "Tomato Sauce", "Olive Oil"],
      instructions: "Boil the pasta and add the sauce.",
    },
    {
      title: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      instructions: "Chop vegetables and toss together.",
    },
  ]}
/>
```
