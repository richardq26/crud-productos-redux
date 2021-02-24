// Cada reducer tiene su propio state

import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR
} from "../types";

const initialState = {
  productos: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
    case COMENZAR_DESCARGA_PRODUCTOS:
      return { ...state, loading: true };

    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };

    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        // el payload sería true
        error: action.payload,
      };
    case DESCARGA_PRODUCTOS_EXITO:
      return {...state, loading: false, error: null, productos: action.payload}
    default:
      return state;
  }
}
