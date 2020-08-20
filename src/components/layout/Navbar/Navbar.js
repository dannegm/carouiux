import React from 'react';

import { Centered } from '../helpers';

import {
  NavWrapper,
  NavContainer,
  NavBrand,
  NavBrandLink,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
} from './Navbar.styled';

const Navbar = () => {
  return (
    <NavWrapper>
      <Centered>
        <NavContainer>
          <NavBrand>
            <NavBrandLink to="/">Carolina Sánchez Guzmán</NavBrandLink>
          </NavBrand>
          <NavMenu>
            <NavMenuItem>
              <NavMenuLink to="/#skills">Skills</NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="/#projects">Projects</NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="/about">About</NavMenuLink>
            </NavMenuItem>
          </NavMenu>
        </NavContainer>
      </Centered>
    </NavWrapper>
  );
};

export default Navbar;
