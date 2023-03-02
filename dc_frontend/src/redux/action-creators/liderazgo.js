import axios from "axios";
import { CREATE_GANTT, GET_ALL_GANTT } from "../action-types";

export const createGantt = (input) => {
  console.log("action");
  return { type: CREATE_GANTT, payload: input };
};

export const getAllGantt = () => {
  return {
    type: GET_ALL_GANTT,
  };
};
