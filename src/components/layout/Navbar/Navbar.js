import React from 'react';
import PropTypes from 'prop-types';

import { Centered } from '../helpers';

import {
  NavWrapper,
  NavContainer,
  NavBrand,
  NavBrandLink,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
  NavMenuButton,
} from './Navbar.styled';

const Navbar = ({ onSkillsClick, onProjectsClick }) => {
  return (
    <NavWrapper>
      <Centered>
        <NavContainer>
          <NavBrand>
            <NavBrandLink to="/">Carolina Sánchez Guzmán</NavBrandLink>
          </NavBrand>
          <NavMenu>
            <NavMenuItem>
              <NavMenuButton onClick={onSkillsClick}>Skills</NavMenuButton>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuButton onClick={onProjectsClick}>Projects</NavMenuButton>
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
Navbar.propTypes = {
  onSkillsClick: PropTypes.func,
  onProjectsClick: PropTypes.func,
};
Navbar.defaultProps = {
  onSkillsClick: () => null,
  onProjectsClick: () => null,
};

export default Navbar;
