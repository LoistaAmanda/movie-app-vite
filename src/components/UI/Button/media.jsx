import styled from "styled-components";

export const Image = styled.img`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  border-radius: ${({ rounded }) => rounded || "0px"};
  object-fit: ${({ fit }) => fit || "cover"};
`;
