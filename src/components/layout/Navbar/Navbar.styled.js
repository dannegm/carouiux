import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavBrand = styled.div``;
export const NavBrandLink = styled(NavLink)`
    font-size: 1.563rem;
    color: #050038;
`;

export const NavMenu = styled.ul`
    display: flex;
`;

export const NavMenuItem = styled.li`
    display: block;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
`;

export const NavMenuLink = styled(NavLink)`
    font-size: 1.563rem;
    color: #050038;
`;

export const NavMenuButton = styled.a`
    font-size: 1.563rem;
    color: #050038;
`;
