import { MDBCol, MDBContainer, MDBRow, MDBBtn } from "mdbreact";
import React from "react";
import StudyPng from "../images/study.png";
import { Link } from "react-router-dom";

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
            {/* heading */}
            <h1>
              Available <br /> <span style={Color}> Courses </span>
            </h1>
            {/* paragraph */}
            <p className="text-justify">
              Herald College Kathmandu offers the BSc (Hons) International
              Business Management and BSc (Hons) in Computer Science
              qualification from the University of Wolverhampton (WLV).
            </p>
            {/* start of dynamic course content */}
            <div className="ml-3">
              {this.state.Courses.map(({ courses }) => (
                <ul>
                  <li>
                    <h5>{courses}</h5>
                  </li>
                </ul>
              ))}
            </div>

            <div className="text-right mt-4">
              {/* button for single course page */}
              <Link to="/SingleCourse">
                <button
                  className="btn btn-outline-success rounded"
                  color="success"
                >
                  VIiew Course
                </button>
              </Link>

            </div>
          </MDBCol>
          {/* image */}
          <MDBCol md="6" className="courseImg text-center">
            <img src={StudyPng} className="img-fluid" alt="illustration art" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Course;
