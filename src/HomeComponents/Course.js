import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import StudyPng from "../images/study.png";

class Course extends React.Component {
  constructor() {
    super();
    this.state = {
      Courses: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:1337/courses")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response From Server");
        }
        return response.json();
      })
      .then((Courses) => {
        this.setState({ Courses: Courses });
      });
  }

  render() {
    const Color = { color: "#74C043" };
    return (
      <MDBContainer className="mt-5">

        <MDBRow>
          <MDBCol md="6">
            <h1>
              Available <br /> <span style={Color}> Courses </span>
            </h1>
            <p className="text-justify">
              Herald College Kathmandu offers the BSc (Hons) International Business Management and BSc (Hons) in Computer Science qualification from the University of Wolverhampton (WLV).
          </p>
            <div className="ml-3">
              {this.state.Courses.map(({ courses }) => (
                <ul>
                  <li>
                    <h5>{courses}</h5>
                  </li>
                </ul>
              ))}
            </div>
          </MDBCol>

          <MDBCol md="6" className="courseImg text-center">
            <img src={StudyPng} className="img-fluid" alt="" />
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    );
  }
}

export default Course;
