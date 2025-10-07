import styled from 'styled-components';

export const Titulo = styled.h1`
  font-size: 2.5rem;
  color: #d60a0aff;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ComentarioCard = styled.li`
  background: #db1f1294;
  border-left: 4px solid #3b82f6;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  list-style: none;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 2rem;

  input, textarea {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }

  button {
    background-color: #3b82f6;
    color: white;
    border: none;
    padding: 0.8rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #2563eb;
  }
`;