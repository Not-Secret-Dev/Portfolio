import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 15px;
`;

const NavLink = styled(Link)`
  margin-right: 50px;
  text-decoration: none;
  color: white;
  font-weight: 800;

  &:hover {
    color: #bb86fc;
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/About">About</NavLink>
    </Nav>
  );
};

export default Header;
