import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBNavLink } from "mdbreact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import hero_banner from '../images/hck-logo.png'

const Footer = () => {
  return (
    <MDBFooter color="green" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          
          <MDBCol md="4" className="text-left">
            <h5 className="title ">About Herald College</h5>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident, voluptatum, consequatur laboriosam eveniet natus iure
              laborum officia excepturi ut beatae rem. At nobis maiores dolores
              ex vitae quisquam similique odio!
            </p>
          </MDBCol>

          <MDBCol md="4" className="text-center">
            <h5 className="title">Important Links</h5>
            
              <MDBNavLink className="p-1" to="/About">About</MDBNavLink>
              <MDBNavLink className="p-1" to="/Contact">Contact</MDBNavLink>
              <MDBNavLink className="p-1" to="/Events">Events</MDBNavLink>
              <MDBNavLink className="p-1" to="/Gallery">Gallery</MDBNavLink>
              <MDBNavLink className="p-1" to="/">Home</MDBNavLink>
           
          </MDBCol>
          
          <MDBCol md="4" className=" my-auto text-center footer-HCK-logo">
            <img src={hero_banner} alt="" className="img-fluid"/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className=" text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#"> Herald College Kathmandu</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
