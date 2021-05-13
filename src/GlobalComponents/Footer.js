import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavLink } from "mdbreact";
import hero_banner from "../images/ing.png";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      footers: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:1337/footers")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response From Server");
        }
        return response.json();
      })
      .then((footers) => {
        this.setState({ footers: footers });
      });
  }

  render() {
    const Color = { backgroundColor: "#74C042" };
    return (
      <MDBFooter style={Color} className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          {this.state.footers.map(({ text }) => (
            <MDBRow>
              <MDBCol md="4" className="text-left">
                <h5 className="title ">About Herald College</h5>
                <p className="text-justify">{text}</p>
              </MDBCol>

              <MDBCol md="4" className="text-center">
                <h5 className="title">Important Links</h5>

                <MDBNavLink className="p-1" to="/About">
                  About
                </MDBNavLink>
                <MDBNavLink className="p-1" to="/Contact">
                  Contact
                </MDBNavLink>
                <MDBNavLink className="p-1" to="/Events">
                  Events
                </MDBNavLink>
                <MDBNavLink className="p-1" to="/Gallery">
                  Gallery
                </MDBNavLink>
                <MDBNavLink className="p-1" to="/">
                  Home
                </MDBNavLink>
              </MDBCol>

              <MDBCol md="4" className=" my-auto text-center footer-HCK-logo">
                <img src={hero_banner} alt="" className="img-fluid" />
              </MDBCol>
            </MDBRow>
          ))}
        </MDBContainer>

        <div className=" text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#"> Herald College Kathmandu</a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
