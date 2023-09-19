import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1; // elemento preenche o espaço disponível no conteiner
  background-color: white;
  text-transform: uppercase; // deixa o texto em maiusculo
  color: black; // texto
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer; // icone de mao
  background-color:darkblue;
  font-weight: 600;
  &:hover {
    background-color: #001f3f; // cor diferente para o hover
  }
`;
