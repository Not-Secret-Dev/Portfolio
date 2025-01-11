import React from "react";
import styled from "styled-components";

const NavbarComponent = styled.nav`
  height: 70px;
  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  ul {
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
  }

  ul > li {
    list-style-type: none;
  }

  ul > li > a {
    text-decoration: none;
    padding: 10px 15px;
    font-weight: 500;
    font-size: 18px;
    color: #333;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  ul > li > a:hover {
    color: #fff;
    background-color: #007bff;
  }

  ul > li > a.active {
    color: #fff;
    background-color: #007bff;
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      background-color: #fff;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      display: none; /* Hidden by default */
    }

    ul.show {
      display: flex;
    }
  }

  .menu-toggle {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      font-size: 24px;
    }
  }
`;

const Navbar = () => {
  const handleToggleMenu = () => {
    const menu = document.querySelector("ul");
    menu.classList.toggle("show");
  };

  return (
    <NavbarComponent>
      <div className="menu-toggle" onClick={handleToggleMenu}>
        ☰
      </div>
      <ul>
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </NavbarComponent>
  );
};

export default Navbar;
