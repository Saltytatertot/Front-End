import React from 'react';
import {Nav,NavLink,NavMenu} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/index">
            Home
          </NavLink>
          <NavLink to="/map">
            Map
          </NavLink>
          <NavLink to="/room">
            Room
          </NavLink>          
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;