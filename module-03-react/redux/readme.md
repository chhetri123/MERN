### Introduction to Redux

**Redux** is a state management library often used in React applications to manage complex state across multiple components. It provides a **centralized store** where all the state of your app lives, making it easier to manage and track state changes in large applications.

---

### Why Use Redux?

1. **Centralized State**: Redux stores all application state in a single place (the store), making it easier to manage and debug.
2. **Predictable State Changes**: Changes to the state happen in a predictable way using **pure functions** (reducers).
3. **Time-Travel Debugging**: Redux’s state history allows developers to track every state change and "travel" back to a previous state during debugging.
4. **Scalable**: It helps scale your application when state management across many components becomes complex.

---

### Why Redux is Different from `useContext`

Both Redux and `useContext` are used to **share state** across components, but they differ in several ways:

1. **State Management Logic**:

   - **useContext**: It is primarily designed for passing data between deeply nested components (prop drilling).
   - **Redux**: Provides more structure for managing global state, including actions, reducers, and middleware for handling side effects.

2. **State Updates**:

   - **useContext**: The state update logic (usually using `useReducer`) is implemented by the developer without enforced patterns.
   - **Redux**: Enforces a strict pattern of dispatching actions, reducing them to state updates through reducers.

3. **Middleware and DevTools**:

   - **useContext**: Doesn't offer middleware or built-in tools for complex tasks like asynchronous actions.
   - **Redux**: Has middleware (like Redux Thunk or Saga) for handling asynchronous actions, and comes with powerful dev tools for debugging.

4. **Scaling**:
   - **useContext**: Works well for smaller apps or where only a few pieces of state are shared.
   - **Redux**: Better suited for larger apps with complex state management needs, offering a more organized way to scale state management.

---

### When to Use Redux:

- When your app has complex or deeply nested state that needs to be shared across many components.
- When state changes need to be predictable and easy to trace.
- When you need advanced features like middleware for handling async operations (e.g., API calls).

### When to Use `useContext`:

- When state is relatively simple and doesn't require a lot of management.
- For smaller applications or for sharing state between a few components.

### Redux Keywords

1. **State**:

   - Central data that holds the current information of your app.
   - It is immutable and updated only through actions.

2. **Dispatch**:

   - Function used to send actions to the store.
   - It triggers a state change by calling the reducer.

3. **Action**:

   - Plain object with a `type` (string) that describes what happens.
   - Optionally includes a `payload` with additional data.

4. **Reducer**:

   - A pure function that takes the current state and action as input.
   - Returns a new state based on the action's type.

5. **Store**:
   - Holds the entire state of the application.
   - Coordinates actions and reducers to update the state.
   - Created using the `createStore` function.

---

### How Redux Works:

1. **Component** dispatches an **action**.
2. **Store** sends the action to the **reducer**.
3. **Reducer** processes the action and returns a new **state**.
4. The **state** updates and re-renders the component.

#### 1. **React Redux in Real-Life Analogy**

Imagine your app is like a **restaurant**, and Redux is the **waiter** who manages orders.

- **Customer (Component):** Just like customers in a restaurant who ask for food (i.e., data or actions), your React components request data or make changes.
- **Menu (Actions):** The customer selects what they want to order from the menu, which represents the **actions** in Redux (a way to say what needs to be done).
- **Waiter (Redux Store):** The waiter takes the order (actions) and passes it to the kitchen (reducers). The waiter knows exactly where to send the order and how to get the correct food back to the customer.
- **Kitchen (Reducer):** The kitchen prepares the food (modifies the state) based on the order the waiter brings in. The reducers decide what changes happen in the state.
- **Food (State):** The food represents the **state** of the app, which gets delivered back to the customer (component). Every time the food (state) changes, it is updated and served.

![Redux Workflow Analogy](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*R6QYV3yvknDTy6A2BugiAA.png)

#### 2. **Life Cycle of a Reducer in Redux**

- **Action Creation**: A component dispatches an action. Think of it like a customer placing an order from the menu.
- **Reducer Invocation**: The action is passed to the reducer. The reducer is like the kitchen, where it prepares a new state based on the action.
- **State Update**: The reducer returns a new state, which is then updated in the Redux store. This new state is sent back to the components.

**Reducer's life cycle in steps:**

1. Action dispatched by the component.
2. Middleware (optional) processes the action.
3. Reducer receives the action.
4. Reducer creates a new state based on the action and current state.
5. New state is returned to the store.
6. The components get the updated state from the store.

#### 3. **Simple Project: Step-by-Step Redux Implementation**

##### Step 1: Install Dependencies

First, install the necessary libraries.

```bash
npx create-react-app redux-beginner
cd redux-beginner
npm install redux react-redux
```

##### Step 2: Create a Redux Store

- Create a folder `src/redux` to hold all Redux-related files.
- Inside `src/redux`, create a file `store.js` for the Redux store.

```javascript
import { createStore } from "redux";
import counterReducer from "./counterReducer";

// Create the Redux store
const store = createStore(counterReducer);

export default store;
```

##### Step 3: Create a Reducer

- Inside `src/redux`, create a file `counterReducer.js`:

```javascript
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
```

##### Step 4: Create Actions

- Create actions directly in your component for simplicity.

```javascript
const increment = () => ({ type: "INCREMENT" });
const decrement = () => ({ type: "DECREMENT" });
```

##### Step 5: Connect Redux to React

- In `src/index.js`, wrap your app with `Provider` to give it access to the store.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

##### Step 6: Use Redux State and Dispatch in a Component

- Inside `src/App.js`, connect your component to Redux.

```javascript
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default App;
```
