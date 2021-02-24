import React from "react";
import { useDispatch, useSelector } from 'react-redux';
// useSelector es el hook de react-redux para ver el state
import { useForm } from "../hooks/useForm";
// Actions de REDUX
import { crearNuevoProductoAction } from "../actions/productoActions";

export const NuevoProducto = ({history}) => {

  // Utilizando useDispatch y me devuelve una función 
  const dispatch = useDispatch();
  // Se usa para llamar las funciones en el action

  // Acceder al state del store
  const cargando = useSelector(state => state.productos.loading);
  const error = useSelector( state => state.productos.error);

  // Mandamos llamar el action de productoAction
  const agregarProducto = (producto)=>dispatch(crearNuevoProductoAction(producto));


  const [formValues, handleInputChange] = useForm({ nombre:'', precio: ''});
  const {nombre, precio} = formValues;
  
  // Cuando el usuario haga submit
  const submitNuevoProducto = e =>{
    e.preventDefault();
    if(nombre.trim()==='' || precio <= 0){
      return;
    }
    // Crear el nuevo producto
    // dispatch(crearNuevoProductoAction({nombre, precio}));
    agregarProducto({nombre, precio});

    // Redireccionar
    history.push('/');
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo producto
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label htmlFor="nombreproducto">Nombre del producto</label>
                <input
                  type="text"
                  id="nombreproducto"
                  name="nombre"
                  className="form-control mb-2"
                  placeholder="Nombre del producto"
                  value={nombre}
                  onChange={handleInputChange}
                />
                <label htmlFor="precio">Precio del producto</label>
                <input
                  type="number"
                  id="precio"
                  name="precio"
                  className="form-control"
                  placeholder="Precio del producto"
                  value={precio}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
            { cargando ? <p>Cargando</p> : null}

          </div>
        </div>
      </div>
    </div>
  );
};
