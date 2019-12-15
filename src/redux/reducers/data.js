import { Types } from "../actions/data";

// create initial state for reducers
const INIT_STATE = {
  test: "Hello world!"
};

// reducer function to transform state
export default function data(state = INIT_STATE, action) {
  return state;
}
