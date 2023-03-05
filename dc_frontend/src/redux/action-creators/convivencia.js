import axios from "axios";
import { CREAR_CONFLICTO } from "../action-types";

export const crearConflicto = (input) => {
  return { type: CREAR_CONFLICTO, payload: input };
};
