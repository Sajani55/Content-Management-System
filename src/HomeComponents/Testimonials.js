import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
} from "mdbreact";
import fetch from "isomorphic-fetch";
import React from "react";

class Testimonial extends React.Component {
  constructor() {
    super();
    this.state = {
      testimonials: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:1337/testimonials")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response From Server");
        }
        return response.json();
      })
      .then((testimonials) => {
        this.setState({ testimonials: testimonials });
      });
  }

  render() {
    const CardStyle = {
      minHeight: "16rem",
    };

    function truncate(string, n) {
      return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
    }

    return (
      <>
      <MDBContainer fluid className="grey lighten-4">
        <MDBContainer>
          <MDBRow>
            <MDBCol className="mb-4 text-center" md="12">
              <h1>Testimonial</h1>
            </MDBCol>
            {this.state.testimonials.map(({ id, comments, name }) => (
              <MDBCol className="mb-4 col-xl-6 col-lg-6 col-md-12 col-12">
                <MDBCard style={CardStyle} className="text-justify">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol className="testimonial-text">{truncate(`"${comments}`,300)}</MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                  <MDBCardFooter text="grey" className="text-right">
                  By: {name}
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
        </MDBContainer>
      </>
    );
  }
}

export default Testimonial;
