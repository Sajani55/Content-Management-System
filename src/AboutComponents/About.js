import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import Img from "../images/grad.jpg";
import Img1 from "../images/grad1.jpg";
import Img2 from "../images/grad2.jpg";
import AboutImg from "../images/about.png";
import Course from "../HomeComponents/Course"

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:1337/first-about-sections")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response From Server");
        }
        return response.json();
      })
      .then((about) => {
        this.setState({ about: about });
      });
  }

  render() {
    const Margin = { marginTop: "6rem" };
    const Color = { color: "#74C043" };
    return (
      <div>
      <MDBContainer style={Margin}>
        <MDBRow className="about-hero">
        <MDBCol md="12" className="about-img text-center mb-5">
            <img src={AboutImg} className="img-fluid mt-5" />
          </MDBCol>
          </MDBRow>
          {this.state.about.map(
              ({ id, para, title, image }) => (
          <MDBRow className="mt-4">
           <MDBCol md="6">
            <h2 style={Color}>{title}</h2>
            <p className="text-justify pt-2">
              {para}
            </p>
          </MDBCol>
          <MDBCol md="6">
            <img src={`http://localhost:1337${image[0].url}`} className="img-fluid" />
          </MDBCol>
          
        </MDBRow>
        ))}
      </MDBContainer>
      <Course />
    </div>
    );
  }
}
export default About;
