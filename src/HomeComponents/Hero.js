import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import hero_banner from '../images/hck-logo.png'
import fetch from "isomorphic-fetch";

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      HeroText: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:1337/hero-sections")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response From Server");
        }
        return response.json();
      })
      .then((HeroText) => {
        this.setState({ HeroText: HeroText });
      });
  }

  render() {
    return (
      <div className="mt-4">
        <MDBContainer>
        {this.state.HeroText.map(({text}) => (
          <MDBRow>
            <MDBCol md="6" className="hero-banner-img mt-4 text-center">
              <img src={hero_banner} alt="" className="img-fluid" />
            </MDBCol>
            <MDBCol md="6" className="mt-4">
              <p className="text-justify">
                {text}
          </p>
            </MDBCol>
          </MDBRow>
          ))}
        </MDBContainer>
      </div>
    );
  }
}


export default Hero;

