import styled from "styled-components";

export const Heading = styled.h1`
  font-size: ${({ size }) => size || "2rem"};
  font-weight: bold;
  color: ${({ color }) => color || "#fff"};
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  font-size: ${({ size }) => size || "1rem"};
  color: ${({ color }) => color || "#ddd"};
  line-height: 1.6;
`;
