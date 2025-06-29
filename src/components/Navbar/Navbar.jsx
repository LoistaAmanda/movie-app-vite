import { Link } from "react-router-dom";
import styled from "styled-components";
import { Heading } from "../UI/Button/typograpy.jsx";

const StyledNavbar = styled.div`
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  li {
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin: 0 1rem;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #90caf9; /* lighter blue on hover */
    }
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <Heading size="2.4rem" color="#fff" margin="0 0 1rem 0">
          Movie App
        </Heading>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movie/create">Add Movie</Link>
          </li>
          <li>
            <Link to="/movie/popular">Popular</Link>
          </li>
          <li>
            <Link to="/movie/now">Now Playing</Link>
          </li>
          <li>
            <Link to="/movie/top">Top Rated</Link>
          </li>
        </ul>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
