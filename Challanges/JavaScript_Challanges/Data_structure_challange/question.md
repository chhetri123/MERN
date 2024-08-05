# Advanced JavaScript Features - Tasks

Now, let's create a task file to practice these concepts:

# Modern JavaScript Features - Tasks

1. **Array Destructuring**
   Create an array of your favorite books (at least 5). Use array destructuring to assign the first three books to variables. Then, use the rest pattern to assign the remaining books to a new array.

2. **Object Destructuring**
   Create an object representing a car with properties for make, model, year, and color. Use object destructuring to extract these properties into variables. Also, add a default value for a 'price' property that doesn't exist in the original object.

3. **Spread Operator**
   Create two arrays of numbers. Use the spread operator to create a new array that combines both arrays. Then, use the spread operator to create a copy of this new array and add two more numbers to it.

4. **Rest Parameters**
   Write a function that calculates the average of any number of arguments passed to it. Use the rest parameter syntax to gather all arguments into an array.

5. **Short Circuiting**
   Write a function that takes a user object as an argument. Use the && operator to check if the user has a 'name' property and it's not an empty string. If true, return the name; otherwise, return 'Anonymous'.

6. **Nullish Coalescing**
   Create a function that takes a product object as an argument. Use the nullish coalescing operator to set default values for the 'discount' and 'stock' properties if they are null or undefined.

7. **For-of Loop**
   Create an array of objects, each representing a person with 'name' and 'age' properties. Use a for-of loop to iterate over the array and log a message for each person, like "Name is X years old".

8. **Combined Challenge**
   Create a function that takes an object as its first argument and any number of additional arguments. The object should have an 'operation' property that's either 'add' or 'multiply'. Use object destructuring to extract the operation, array destructuring with rest to gather the additional arguments, and a for-of loop to perform the specified operation on all the numbers. Return the result.

9. **Enhanced Object Literals**
   Create an object representing a book using enhanced object literal syntax. Include properties for title, author, and a method to display book info. Use computed property names to add a property whose name is stored in a variable.

10. **Optional Chaining**
    Create a nested object structure representing a company with departments and employees. Write a function that safely accesses and returns an employee's email, using optional chaining to handle cases where the department or employee might not exist.

11. **Looping Objects**
    Create an object representing a student's grades in different subjects. Use Object.entries() to calculate and log the student's average grade.

12. **Sets**
    Given an array of numbers with some duplicates, use a Set to remove the duplicates. Then, use the spread operator to convert the Set back to an array and log it.

13. **Maps: Fundamentals**
    Create a Map to store information about different countries (name as key, capital as value). Implement functions to add a new country, get a country's capital, and check if a country exists in the Map.

14. **Maps: Iteration**
    Using the Map from the previous task, write a function that returns an array of all countries whose names start with a given letter. Use Map iteration methods to accomplish this.

15. **Working With Strings**
    Write a function that takes a sentence as input and returns an object containing:

- The number of words in the sentence
- The longest word in the sentence
- The sentence with the first letter of each word capitalized

16. **Combined Challenge**
    Create a function that takes a string of text as input. The function should:

- Use a Set to find all unique words in the text
- Use a Map to count the occurrences of each word
- Return an array of objects, each containing a word and its count, sorted by count in descending order
  Use string methods, Sets, Maps, and array methods to accomplish this task.

## Advance challange

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
-underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)

- underscoreCase \_ ✅
- firstName**\_\_\_** ✅✅
- someVariable\_\_\_\_ ✅✅✅
- calculateAge \_\_\_\_✅✅✅✅
- delayedDeparture ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉

HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b

HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉

HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck.

Afterwards, test with your own test data!

## Challange #2

Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:

   - [FIRST HALF] 17: ⚽️ GOAL

```javascript
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
```

GOOD LUCK 😀

## Challange #3

Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
   - Odd of victory Bayern Munich: 1.33
   - Odd of draw: 3.25
   - Odd of victory Borrussia Dortmund: 6.5
   - Get the team names directly from the game object, don't hardcode them (except for "draw").
   - HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:

{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}

```javascript
// You can use this object
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
```

## challange #4

We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
