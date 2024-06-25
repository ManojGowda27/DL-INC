import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/company_logo.jpeg';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  background: transparent;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem;
  }
`;

const StyledLink = styled(NavLink)`
  color: #4B3B47;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;

  &:hover {
    border: 2px solid #9C9990;
    font-weight: bold;
    color: #CFD2B2;
  }

  &.active {
    font-weight: bold;
  }
`;

const Logo = styled.img`
  width: 20%;
  max-width: 150px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
    color: #CFD2B2;
    margin-right: 1rem; /* Adjust margin to pull it left */
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Company Logo" />
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Nav open={isOpen}>
        <StyledLink exact to="/" activeClassName="active" onClick={() => setIsOpen(false)}>Home</StyledLink>
        <StyledLink to="/about" activeClassName="active" onClick={() => setIsOpen(false)}>About</StyledLink>
        <StyledLink to="/products" activeClassName="active" onClick={() => setIsOpen(false)}>Products</StyledLink>
        <StyledLink to="/contact" activeClassName="active" onClick={() => setIsOpen(false)}>Contact</StyledLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
