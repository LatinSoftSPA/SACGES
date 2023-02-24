import axios from "axios";
import { GET_TEST } from "../action-types";
const { REACT_APP_TEST_GET_ROUTE } = process.env;

export const test = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(REACT_APP_TEST_GET_ROUTE);
      return dispatch({
        type: GET_TEST,
        payload: response,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
