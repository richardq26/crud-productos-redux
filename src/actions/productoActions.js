import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR
} from "../types";
// Reducer y Action se comunican por medio de lis tyoes

import Swal from 'sweetalert2'

import clienteAxios from '../config/axios';

// Crear nuevos productos
// Esta función es la que usaremos en el componente
export function crearNuevoProductoAction(producto) {
  // dispatch es el que otorga thunk al detectar que es una funcion asincrona
  return async(dispatch) => {
    dispatch(agregarProducto());

    try {
      // Insertar en la api
      await clienteAxios.post('/productos', producto);
      dispatch(agregarProductoExito(producto));
      Swal.fire('Correcto', 'El producto se agregó correctamente', 'success')
    } catch (error) {
      console.log(error);
      // si hay un error cambiar el state
      dispatch(agregarProductoError(true));

      // Alerta de error
      Swal.fire({icon: 'error', title:'Hubo un error', text:'Hubo un error, intenta de nuevo'})
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
const agregarProductoError = estado => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado
});

// Esto lo valida productosReducer con el switch y ve el type

// Función que descarga los productos de la bd 
export function obtenerProductosAction(){
  return async(dispatch) => {
    dispatch(descargarProductos());
    try {
      const respuesta = await clienteAxios.get('/productos');
      dispatch(descargaProductosExitosa(respuesta.data));
    } catch (error) {
      dispatch(descargaProductosError)
    }
  }
}

const descargarProductos = () =>({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true
});
const descargaProductosExitosa= productos =>({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos
});
const descargaProductosError = ()=>({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: true
});