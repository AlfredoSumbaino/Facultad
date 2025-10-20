import React, { Component } from "react";
import { Container, Title, Button } from "./Style";

export default class Contar extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  decrementar = () => {
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    const { contador } = this.state;
    return (
      <Container valor={contador}>
        <Title>Contador (Clase): {contador}</Title>
        <div>
          <Button onClick={this.incrementar}>Sumar</Button>
          <Button tipo="restar" onClick={this.decrementar}>Restar</Button>
        </div>
      </Container>
    );
  }
}