import { useState } from "react";
import { Container, Title, Button } from "./Style";

export default function ContarFuncion() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <Container valor={contador}>
      <Title>Contador (Funcional): {contador}</Title>
      <div>
        <Button onClick={incrementar}>Sumar</Button>
        <Button tipo="restar" onClick={decrementar}>Restar</Button>
      </div>
    </Container>
  );
}