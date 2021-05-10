import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import Img from "../images/grad.jpg";
import Img1 from "../images/grad1.jpg";
import Img2 from "../images/grad2.jpg";
import AboutImg from "../images/about.png";
import Course from "../HomeComponents/Course"

const About = () => {
  const Margin = { marginTop: "6rem" };
  const Color = { color: "#74C043" };

  return (
    <div>
      <MDBContainer style={Margin}>
        <MDBRow className="about-hero">
        <MDBCol md="12" className="about-img text-center mb-5">
            <img src={AboutImg} className="img-fluid mt-5" />

          </MDBCol>
          {/* row1 */}
           <MDBCol md="6">
            <h2 style={Color}>Herald College Kathmandu</h2>
            <p className="text-justify pt-2">
              Herald College Kathmandu provides the best UK university education
              at most affordable fees. It offers Bachelor Degrees in IT and
              Business in direct partnership with the University of
              Wolverhampton, UK. Programmes that Herald College Kathmandu offers
              are flexible and have always aimed to foster a broader based
              knowledge.
          
            </p>
          </MDBCol>
          <MDBCol md="6">
            <img src={Img1} className="img-fluid" />
          </MDBCol>

          <MDBCol md="6" >
            <img src={Img2} className="img-fluid mt-5" />
          </MDBCol>

          <MDBCol className=" mt-5" md="6">
            <h1>WHY HCK ?</h1>
            <p className="text-justify pt-2">
              Herald College Kathmandu offers direct degrees in Information
              Technology and Business. The courses are entirely designed,
              approved and delivered by the University of Wolverhampton, in
              association with New Zealand. As this is a direct partnership,
              there are no credit-transfer hassles. The students can complete
              their entire Bachelors’ degree at Herald College. Our students get
   
             </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Course />
    </div>
  );
};

export default About;
