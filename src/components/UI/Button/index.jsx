import styled, { css } from "styled-components";
import { theme } from "../Button/theme.jsx";

const colors = {
  primary: "#4361ee",
  secondary: "#b5179e",
};

const Button = styled.button`
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  background-color: ${({ variant }) => colors[variant] || colors.primary};
  font-size: ${({ size }) => theme.buttonSizes[size || "md"].fontSize};
  padding: ${({ size }) => theme.buttonSizes[size || "md"].padding};

  ${({ full }) =>
    full &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
