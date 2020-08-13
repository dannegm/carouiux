import React from 'react';

import { Container, Navbar, NavbarBrand, NavLink } from '@bootstrap-styled/v4';

const NavigationBar = () => {
  return (
    <Container>
      <Navbar bg="light">
        <NavbarBrand href="/" className="ml-5">
          Carolina Sánchez Guzmán
        </NavbarBrand>
        <Navbar className="ml-auto">
          <NavLink href="#" className="mt-2 mb-2 ml-4 mr-4">
            Skills
          </NavLink>
          <NavLink href="#" className="mt-2 mb-2 ml-4 mr-4">
            Projects
          </NavLink>
          <NavLink href="#" className="mt-2 mb-2 ml-4 mr-4">
            About
          </NavLink>
        </Navbar>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
