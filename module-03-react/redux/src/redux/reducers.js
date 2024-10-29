import { COUNT_DECRESE, COUNT_INCRESE } from "./../utils/action_type";

const initalState = {
  count: 0,
  todo: [],
};

const countReducer = (
  state = {
    count: 0,
  },
  action
) => {
  console.log("Dispatch from counter APP", action);
  switch (action.type) {
    case COUNT_INCRESE:
      return { ...state, count: state.count + 1 };
    case COUNT_DECRESE:
      return { ...state, count: state.count - 1 };
  }

  return state;
};

const todoReducer = (
  state = {
    todo: [],
  },
  action
) => {
  console.log("Dispatch from counter APP 1", action);
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "DELETE":
      return { ...state, count: state.count - 1 };
  }

  return state;
};

export { countReducer, todoReducer };
