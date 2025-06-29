import styled from "styled-components";
//import styles from './Footer.module.css';

const StyledFooter = styled.div`
  background-color: #4361ee;
  color: #fff;
  padding: 1rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const Heading = styled.h2`
  font-size: ${(props) => props.size || "1.5rem"};
  color: ${(props) => props.color || "#fff"};
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  color: ${(props) => props.color || "#fff"};
  margin-bottom: 1rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <Heading size="2rem" color="#fff">
        Movie App
      </Heading>
      <Paragraph color="#fff">Created By Aufa Billah</Paragraph>
    </StyledFooter>
  );
}

export default Footer;
