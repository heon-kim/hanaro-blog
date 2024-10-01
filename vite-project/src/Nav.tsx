// src/Nav.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavLink, UI } from "./styles";

const Nav: React.FC = () => {
  return (
    <nav>
      <UI>
        <li>
          {" "}
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
        </li>
        <li>
          <NavLink to="/my">My</NavLink>
        </li>
      </UI>
    </nav>
  );
};

export default Nav;
