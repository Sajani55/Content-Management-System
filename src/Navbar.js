import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

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
    const logo = "https://www.collegenp.com/uploads/2018/02/herald-college.png"
 
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar
              color="red"
              dark
              expand="md"
              scrolling
              fixed="top"
              className="py-0"
            >
              <MDBNavbarBrand href="/">
                <img src={logo} alt="Herald College Logo" className="img-fluid hck-logo"/>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right className="text-center">
                  <MDBNavItem >
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Contact</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Events</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default Navbar;
