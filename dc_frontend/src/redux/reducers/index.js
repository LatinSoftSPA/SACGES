import {
  GET_TEST,
  CREAR_ACTIVIDAD,
  GET_ALL_ACTIVIDADES,
  CREAR_GANTT,
  CREAR_CONFLICTO,
} from "../action-types";

const initialState = {
  data: [],
  actividades: [],
  cartasGantt: [],
  conflictos: [],
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
    case CREAR_CONFLICTO:
      return {
        ...state,
        conflictos: [...state.conflictos, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
