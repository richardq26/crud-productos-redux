import React from "react";

export const Productos = () => {
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
        <tbody>

        </tbody>
      </table>
    </>
  );
};
