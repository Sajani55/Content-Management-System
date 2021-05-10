import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavLink } from "mdbreact";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
                Herald College Kathmandu provides the best UK university
                education at most affordable fees.<br></br>It offers Bachelor
                Degrees in IT and Business in direct partnership with the
                University of Wolverhampton, UK.<br></br> Programmes that Herald
                College Kathmandu offers are flexible and have always aimed to
                foster a broader based knowledge.<br></br>
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
