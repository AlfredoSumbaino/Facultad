import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ce7794ff;
  height: 100vh;
`;

export const Title = styled.h3`
  color: #000000ff;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ff9900ff;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Nav = styled.div`
  margin-bottom: 20px;
`;

export const UserInfo = styled.div`
  color: red;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
`;