import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #ccc;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #888;
  font-size: 1rem;
  background-color: #1a1a1a;
  color: #fff;

  &:focus {
    outline: none;
    border-color: #4361ee;
  }
`;
