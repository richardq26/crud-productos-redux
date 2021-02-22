import React, { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  // del e.target
  const handleInputChange = ({ target }) => {
      if(target.type=='number'){
          console.log('xd')
      }
      
    setValues({
      ...values,
      [target.name]: target.type==='number'? Number(target.value) : target.value,
    });
  };

  const reset =() =>{
    setValues(initialState);
  }

  return [ values, handleInputChange, reset];
};