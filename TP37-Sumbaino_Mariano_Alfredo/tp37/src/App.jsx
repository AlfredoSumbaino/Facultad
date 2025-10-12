import React, { useContext } from 'react';
import './App.css';
import Formtarea from './components/Form_tarea';
import { FormContext } from './context/Form_context';
import {
  Container,
  Button,
} from "./components/styles";

const App = () => {
  const { llamadas, llamar } = useContext(FormContext);

  const eliminarLlamada = (index) => {
    llamar({ type: 'ELIMINAR_LLAMADA', payload: index });
  };

  return (
    <Container className="App">
      <Formtarea />
      <h2>Lista de Servicios</h2>
      {llamadas.length === 0 ? (
        <p>No hay servicios registrados</p>
      ) : (
        <ul>
          {llamadas.map((llamada, index) => (
            <li key={index}>
              {llamada.servicio} - {llamada.tiempo} minutos
              <Button onClick={() => eliminarLlamada(index)}>Eliminar</Button>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default App;