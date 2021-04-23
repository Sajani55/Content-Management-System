import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import StudyPng from "../images/study.png";

const Course = () => {
  const Color = { color: "#74C043" };
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="6">
          <h1>
            Available <br /> <span style={Color}> Courses </span>
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            odio libero corporis dolore eum vitae dolorem nulla quisquam
            adipisci expedita quidem mollitia, repellendus fugiat aspernatur
            repudiandae id excepturi molestias omnis!
          </p>
          <div className="ml-3">
            <ul>
              <li>
                <h5>Computer Science (Hons.)</h5>
              </li>
              <li>
                <h5>Business Management (Hons.)</h5>
              </li>
            </ul>
          </div>
        </MDBCol>

        <MDBCol md="6" className="courseImg text-center">
          <img src={StudyPng} className="img-fluid" alt="" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Course;
