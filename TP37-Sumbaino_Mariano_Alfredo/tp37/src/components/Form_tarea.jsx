import React, { useState, useContext } from 'react';
import { FormContext } from '../context/Form_context';
import {
  Title,
  Input,
  Button,
} from "../components/styles";

const Formtarea = () => {
  const { llamar } = useContext(FormContext);
  const [servicio, setServicio] = useState('');
  const [tiempo, setTiempo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!servicio || !tiempo) return;

    llamar({
      type: 'AGREGAR_LLAMADA',
      payload: { servicio, tiempo }
    });

    setServicio('');
    setTiempo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>Registrar Servicio</Title>
      <Input
        type="text"
        placeholder="Tipo de servicio"
        value={servicio}
        onChange={(e) => setServicio(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Tiempo (minutos)"
        value={tiempo}
        onChange={(e) => setTiempo(e.target.value)}
      />
      <Button type="submit">Agregar</Button>
    </form>
  );
};

export default Formtarea;