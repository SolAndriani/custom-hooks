


import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter( (current) => current + value); // Usamos la función de actualización de estado
  };

  const decrement = (value = 1) => {
    setCounter( (current)=> current - value); 
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
