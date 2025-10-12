import { createContext, useReducer, useEffect } from 'react';

// Estado inicial
const initialState = JSON.parse(localStorage.getItem('llamadas')) || [];

// Reducer
const llamadasReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_LLAMADA':
      return [...state, action.payload];
    case 'ELIMINAR_LLAMADA':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

// Crear contexto
export const FormContext = createContext();

// Provider
const FormProvider = ({ children }) => {
  const [llamadas, llamar] = useReducer(llamadasReducer, initialState);

  // Sincronizar con localStorage
  useEffect(() => {
    localStorage.setItem('llamadas', JSON.stringify(llamadas));
  }, [llamadas]);

  return (
    <FormContext.Provider value={{ llamadas, llamar }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormProvider;