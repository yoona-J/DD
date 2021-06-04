import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">BROWN_THUMB</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/test">MAIN</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/howTo">HOW_TO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/help">HELP</NavLink>
              </NavItem>
            </Nav>  
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;