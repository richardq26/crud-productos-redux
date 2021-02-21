// Acá combinaremos todos los reducers
import { combineReducers } from "redux";

// Lo que viene es la función de productosReducer.js
import productosReducer from "./productosReducer";

export default combineReducers({
    productos: productosReducer
})
