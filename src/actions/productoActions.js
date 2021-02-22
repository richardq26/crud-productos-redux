import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";

// Crear nuevos productos

export function crearNuevoProductoAction(producto) {
  return (dispatch) => {
    dispatch(agregarProducto());

    try {
      dispatch(agregarProductoExito(producto));
    } catch (error) {
      //dispatch(agregarProductoError(producto));
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  // Aquí no es obligatorio el payload
  //payload:
});

// Si el producto se guarda en la bd
const agregarProductoExito = producto =>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

// Si hubo un error
const agregarProductoError = producto => ({

});

// Esto lo valida productosReducer con el switch y ve el type
