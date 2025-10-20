import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.valor > 10 ? "#28a745" : "#777fceff"};
  height: 100vh;
  transition: background-color 0.3s ease;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.tipo === "restar" ? "#dc3545" : "#007bff"};
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.tipo === "restar" ? "#c82333" : "#0056b3"};
  }
`;

export const Title = styled.h3`
  color: #000000;
  font-size: 30px;
  margin-bottom: 20px;
`;