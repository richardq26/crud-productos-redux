// El store es el que contiene todo el state y solo hay un store por aplicación

import {createStore, applyMiddleware, compose}  from 'redux';
// applyMiddleware permite agregar al thunk
import thunk from 'redux-thunk';
// Thunk permite utilizar funciones asíncronas

// Este reducer es el combineReducers
import reducer from './reducers';
// No tenemos que poner index.js porque lo busca solo al llamarse index

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
    // El código sgte es del github, nos permite ver si tenemos
    // redux developer tools y así podremos manejarlo

    typeof window === 'object' && typeof 
     window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
    window.__REDUX_DEVTOOLS_EXTENSION__() : f=>f

    // (?:) es para que no deje de funcionar en un navegador que no use redux dev tools
    )
);


export default store;