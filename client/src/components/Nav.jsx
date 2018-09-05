import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class Navigation extends Component {
  logout = ev => {
    console.log("Hello");
    localStorage.clear();
  };

  render() {
    return (
      <Navbar staticTop collapseOnSelect className="a">
        <Navbar.Collapse>
          <Navbar.Header className="text-center">
            <Navbar.Brand>
              <a className="brand-nav" href="/">
                Wallet-Cryptorial
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Nav pullRight>
            <NavItem className="header-nav" eventKey={1} href="/wallets">
              Wallets
            </NavItem>
            <NavItem className="header-nav" eventKey={2} href="/market">
              Market
            </NavItem>
            <NavItem className="header-nav" eventKey={1} href="/tutorial">
              Tutorial
            </NavItem>
            <NavItem
              className="header-nav"
              onClick={this.logout}
              eventKey={2}
              href="/"
            >
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
