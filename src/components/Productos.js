import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";

export const Productos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Consultar la api

    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, []);
  return (
    <>
      <h2 className="text-center my-5">Listado de productos</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark text-center">
          <tr>
            <td scope="col">Nombre</td>
            <td scope="col">Precio</td>
            <td scope="col">Acciones</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};
