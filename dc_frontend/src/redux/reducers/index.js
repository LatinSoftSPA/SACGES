import {
  GET_TEST,
  CREAR_ACTIVIDAD,
  GET_ALL_ACTIVIDADES,
  CREAR_GANTT,
} from "../action-types";

const initialState = {
  data: [],
  actividades: [],
  cartasGantt: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEST:
      return {
        ...state,
        data: action.payload,
      };
    case CREAR_ACTIVIDAD:
      return {
        ...state,
        actividades: [...state.actividades, action.payload],
      };
    case GET_ALL_ACTIVIDADES:
      return state.actividades;
    case CREAR_GANTT:
      return {
        ...state,
        cartasGantt: [...state.cartasGantt, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
