import expect from "expect";

const ACTIONS = {
  INCREMENT: {
    type: "INCREMENT",
  },
  DECREMENT: {
    type: "DECREMENT",
  },
};

/**
 *
 * @param {object} state
 * @param {object} action
 * @param {string} action.type
 */
const counter = (state = 0, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT.type:
      return state + 1;
    case ACTIONS.DECREMENT.type:
      return state - 1;
    default:
      return state;
  }
};

const test = () => {
  expect(counter(0, ACTIONS.INCREMENT)).toEqual(1);
  expect(counter(1, ACTIONS.INCREMENT)).toEqual(2);
  expect(counter(2, ACTIONS.DECREMENT)).toEqual(1);
  expect(counter(1, ACTIONS.DECREMENT)).toEqual(0);
  expect(counter(undefined, {})).toEqual(0);
  console.log("Test Passed!");
};

test();
