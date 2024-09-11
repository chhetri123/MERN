Implement MongoDB aggregation using the **Mongoose** package in a Node.js application.

We'll use the dataset of **restaurants** and **reviews**, and then implement different MongoDB aggregation methods with Mongoose.

### Step 1: Setup Mongoose and MongoDB

First, install the required packages:

```bash
npm install mongoose
```

### Step 2: Define Mongoose Schemas

```js
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/restaurantDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Restaurant Schema
const restaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  rating: Number,
});

// Review Schema
const reviewSchema = new mongoose.Schema({
  restaurantName: String,
  rating: Number,
  review: String,
});

// Models
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
const Review = mongoose.model("Review", reviewSchema);

// Sample data insertion (only run once, then comment out)
// async function insertData() {
//   await Restaurant.insertMany([
//     { name: "Pizza Place", location: "New York", category: "Italian", rating: 4.5 },
//     { name: "Burger Hub", location: "New York", category: "American", rating: 4.2 },
//     { name: "Sushi World", location: "Los Angeles", category: "Japanese", rating: 4.8 },
//     { name: "Taco Town", location: "San Francisco", category: "Mexican", rating: 4.0 },
//     { name: "Curry House", location: "San Francisco", category: "Indian", rating: 4.3 }
//   ]);
//
//   await Review.insertMany([
//     { restaurantName: "Pizza Place", rating: 5, review: "Great pizza!" },
//     { restaurantName: "Pizza Place", rating: 4, review: "Good pizza but a bit pricey." },
//     { restaurantName: "Burger Hub", rating: 5, review: "Best burger in town!" },
//     { restaurantName: "Sushi World", rating: 4, review: "Fresh sushi!" },
//     { restaurantName: "Taco Town", rating: 4, review: "Tasty tacos!" },
//     { restaurantName: "Curry House", rating: 3, review: "Not spicy enough." },
//     { restaurantName: "Curry House", rating: 5, review: "Best curry ever!" }
//   ]);
// }
// insertData();
```

### Step 3: Implement Aggregation Queries Using Mongoose

1. **$match** – Filtering restaurants located in **New York**:

```js
async function getRestaurantsInNewYork() {
  const result = await Restaurant.aggregate([
    { $match: { location: "New York" } },
  ]);
  console.log(result);
}

getRestaurantsInNewYork();
```

2. **$group** – Grouping restaurants by **location** and counting them:

```js
async function countRestaurantsByLocation() {
  const result = await Restaurant.aggregate([
    { $group: { _id: "$location", totalRestaurants: { $sum: 1 } } },
  ]);
  console.log(result);
}

countRestaurantsByLocation();
```

3. **$sort** – Sorting restaurants by **rating** in descending order:

```js
async function sortRestaurantsByRating() {
  const result = await Restaurant.aggregate([{ $sort: { rating: -1 } }]);
  console.log(result);
}

sortRestaurantsByRating();
```

4. **$limit** – Limiting the result to **top 3** restaurants based on rating:

```js
async function top3Restaurants() {
  const result = await Restaurant.aggregate([
    { $sort: { rating: -1 } },
    { $limit: 3 },
  ]);
  console.log(result);
}

top3Restaurants();
```

5. **$project** – Including only the **name** and **rating** fields:

```js
async function projectRestaurantFields() {
  const result = await Restaurant.aggregate([
    { $project: { name: 1, rating: 1, _id: 0 } },
  ]);
  console.log(result);
}

projectRestaurantFields();
```

6. **$lookup** – Joining the **restaurants** and **reviews** collections:

```js
async function joinRestaurantsAndReviews() {
  const result = await Restaurant.aggregate([
    {
      $lookup: {
        from: "reviews", // Collection to join
        localField: "name", // Field from restaurants collection
        foreignField: "restaurantName", // Field from reviews collection
        as: "reviews", // Name of the output array
      },
    },
  ]);
  console.log(JSON.stringify(result, null, 2));
}

joinRestaurantsAndReviews();
```

### Step 4: Execute Aggregation Queries

Once the functions are defined, you can call each one to see the results.

### Example Output for `$lookup`:

```json
[
  {
    "name": "Pizza Place",
    "location": "New York",
    "category": "Italian",
    "rating": 4.5,
    "reviews": [
      { "restaurantName": "Pizza Place", "rating": 5, "review": "Great pizza!" },
      { "restaurantName": "Pizza Place", "rating": 4, "review": "Good pizza but a bit pricey." }
    ]
  },
  ...
]
```

### Summary

With Mongoose, we can utilize MongoDB's aggregation pipeline efficiently by leveraging the `aggregate()` method. We've covered various aggregation stages like `$match`, `$group`, `$sort`, `$limit`, `$project`, and `$lookup` in Mongoose, demonstrating how to implement each using real-life data.

### Task for Students

1. Implement an aggregation query to count how many reviews each restaurant has.
2. Create a new aggregation query to find the average rating of all restaurants.
3. Join the `reviews` and `restaurants` collections to get the latest review for each restaurant.

These exercises will help students understand MongoDB aggregation through practical Mongoose implementations.
