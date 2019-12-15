import { Types } from "../actions/data";

// create initial state for reducers
const INIT_STATE = {
  test: "Hello Redux!"
};

// reducer function to transform state
export default function data(state = INIT_STATE, action) {
  switch (action.type) {
    case Types.GET_DATA_SUCCESS: {
      console.log("redux -> ", action.payload.data.test);
      return {
        test: action.payload.data.test
      };
    }
    default:
      return state;
  }
}
