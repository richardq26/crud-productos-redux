import React from 'react'

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>Crud- React, Redux, Rest API { '&' }Axios</h1>
            </div>
            <a className="btn btn-dark nuevo-port d-block d-md-inline-block"href="/productos/nuevo"> Agregar producto &#43;</a>
        </nav>
    )
}
