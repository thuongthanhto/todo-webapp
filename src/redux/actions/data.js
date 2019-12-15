// actions types is object with the
// key: GET_DATA_REQUEST -> value: describes the action
export const Types = {
  GET_DATA_REQUEST: "get_data_request",
  GET_DATA_SUCCESS: "get_data_success"
};

// function that returns an object literal
export const getDataRequest = () => ({
  type: Types.GET_DATA_REQUEST
});
// key: payload will contain result of the api call
export const getDataSuccess = ({ data }) => ({
  type: Types.GET_DATA_SUCCESS,
  payload: { data }
});
