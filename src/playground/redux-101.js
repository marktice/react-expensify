import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  };
};

const setCount = ({ count }) => {
  return {
    type: 'SET',
    count
  };
};

const resetCount = () => {
  return {
    type: 'RESET'
  };
};

// Reducers
// 1. Reducers are pure functions - don't rely on something outside scope
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
  console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

// Store
const store = createStore(countReducer);

// Runs on every change of state until unsubscribe is called
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// ACTION OBJECTS
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ count: 101 }));
