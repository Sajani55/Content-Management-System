import React from "react";
import RecentEvent from "./RecentEvent";
import { Link } from "react-router-dom";
import fetch from "isomorphic-fetch";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
} from "mdbreact";

class SingleEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      SingleEvent: [],
      EventImage: "",
    };
  }

  componentDidMount() {
    fetch(`http://localhost:1337/events/${this.props.match.params.postid}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response From Server");
        }
        return response.json();
      })
      .then((event) => {
        this.setState({ SingleEvent: event });
        this.setState({ EventImage: event.eventimage.url });
      });
  }

  render() {
    const { id, eventtitle, eventcontent } = this.state.SingleEvent;
    const styleObj = {
      marginTop: "7rem",
      marginBottom: "2rem",
    };
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" style={styleObj}>
              <h2>
                Read More about
                <b>
                  {" "}
                  <br /> {eventtitle}{" "}
                </b>
              </h2>
            </MDBCol>
            <MDBCol md="12">
              <MDBCard>
                <MDBCardImage
                  className="img-fluid mx-auto rounded"
                  src={`http://localhost:1337${this.state.EventImage}`}
                  style={{ height: "90vh" }}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>
                    <h1>{eventtitle}</h1>
                  </MDBCardTitle>
                  <MDBCardText>{eventcontent}</MDBCardText>
                  <Link to="/">
                    <div className="text-right">
                      <MDBBtn color="success" className="rounded">
                        Go Home
                      </MDBBtn>
                    </div>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="12" className="mt-5">
              <h2>
                See More <br /> <b> Events</b>
              </h2>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <RecentEvent />
      </>
    );
  }
}
export default SingleEvent;
