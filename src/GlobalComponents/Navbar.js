import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import Logo from "../images/navlogo.jpg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const Color = { backgroundColor: "#74C042" };
    return (
      <div>
        <header>
          <MDBNavbar
            dark
            expand="md"
            scrolling
            fixed="top"
            className="py-0 container mt-2 rounded"
            style={Color}
          >
            <MDBNavbarBrand href="/" className="ml-4">
              <img
                src={Logo}
                alt="Herald College Logo"
                className="img-fluid hck-logo"
              />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.onClick} className="mr-4" />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav center className="text-center ">
                <MDBNavItem>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="/About">About</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="/Contact">Contact</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="/Events">Events</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="/Gallery">Gallery</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default Navbar;
