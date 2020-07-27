import React, { createContext, useReducer } from 'react';
import { RegisterReducer } from '../reducer/RegisterReducer.js';

const initialState = {
  count: 0,
  registerList: [],
};

export const Register = createContext();
const { Provider } = Register;

export const RegisterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RegisterReducer, initialState);
  const { count, registerList } = state;
  let fakeId = count;
  /**Actions */
  const add = registerForm => {
    dispatch({ type: 'ADD_REGISTER', payload: { ...registerForm, id: ++fakeId } });
  };
  const remove = id => {
    dispatch({ type: 'REMOVE_REGISTER', payload: id });
  };

  // return <Provider value={{ state, add, remove }}>{children}</Provider>;
  return <Provider value={{ count, registerList, add, remove }}>{children}</Provider>;
};
