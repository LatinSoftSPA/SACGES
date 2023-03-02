import { GET_TEST, CREATE_GANTT, GET_ALL_GANTT } from "../action-types";

const initialState = {
  data: [],
  gantt: [],
};

const rootReducer = (state = initialState, action) => {
  console.log("hola");
  switch (action.type) {
    case GET_TEST:
      return {
        ...state,
        data: action.payload,
      };
    case CREATE_GANTT:
      console.log("reducer");
      return {
        ...state,
        gantt: action.payload,
      };
    case GET_ALL_GANTT:
      return state.gantt;
    default:
      return state;
  }
};

export default rootReducer;
