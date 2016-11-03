import React, { Component } from 'react';
import { Grid, Navbar, 
  Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './PrimaryNav.css';

class PrimaryNav extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div>
          <Navbar inverse fixedTop>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">{this.props.name}</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>

              <Navbar.Collapse>
                <Nav pullRight className="format-text">
                  <NavItem eventKey={1} href="https://facebook.github.io/react" target="blank">React Info</NavItem>
                  <NavItem eventKey={1} href="https://facebook.github.io/react-native" target="blank">React Native Info</NavItem>
                  <NavItem eventKey={1} href="https://www.github.com/anderson2" target="blank">About Rob</NavItem>

                </Nav>

              </Navbar.Collapse>

            </Grid>
          </Navbar>
        </div>
    );
  }
}

export default PrimaryNav;

