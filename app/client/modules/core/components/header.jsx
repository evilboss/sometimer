import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

const Header = () => (
    <Navbar brand='logo' right>
        <NavItem href='get-started.html'>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
    </Navbar>

);

export default Header;
