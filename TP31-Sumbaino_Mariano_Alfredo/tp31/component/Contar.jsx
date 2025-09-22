import { useState } from "react";
import { useStyles } from "./Style.js"; // Importa los estilos

export default function Contar() {
  const [contador, setContador] = useState(0);
  const incrementar = () => {
    setContador(contador + 1);
  };

  const styles = useStyles(contador); // Obtiene las clases dinámicas

  return (
    <div>
      <h1 className={styles.contadorText}>Contador: {contador}</h1>
      <button className={styles.boton} onClick={incrementar}>Incrementar</button>
    </div>
  );
}