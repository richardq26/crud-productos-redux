import React from "react";

export const EditarProducto = () => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar su producto
            </h2>
            <div className="form-group">
              <label htmlFor="nombreproducto">Nombre del producto</label>
              <input
                type="text"
                id="nombreproducto"
                name="nombre"
                className="form-control mb-2"
                placeholder="Nombre del producto"
              />
              <label htmlFor="precio">Precio del producto</label>
              <input
                type="number"
                id="precio"
                name="precio"
                className="form-control"
                placeholder="Precio del producto"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
