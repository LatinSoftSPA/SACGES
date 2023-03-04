import axios from "axios";
import {
  CREAR_ACTIVIDAD,
  GET_ALL_ACTIVIDADES,
  CREAR_GANTT,
} from "../action-types";

export const crearActividad = (input) => {
  return { type: CREAR_ACTIVIDAD, payload: input };
};

export const crearGantt = (input) => {
  return { type: CREAR_GANTT, payload: input };
};

export const getAllGantt = () => {
  return {
    type: GET_ALL_ACTIVIDADES,
  };
};
