import React from 'react'
import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1><Link to = {'/'} className="text-light"> Crud- React, Redux, Rest API { '&' }Axios</Link></h1>
            </div>
            <Link className="btn btn-dark nuevo-port d-block d-md-inline-block" to={"/productos/nuevo"}> Agregar producto &#43;</Link>
        </nav>
    )
}
