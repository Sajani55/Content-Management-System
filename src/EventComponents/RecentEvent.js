import { Link } from "react-router-dom";
import React from "react";
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

function refreshPage() {
  window.location.reload(false);
  window.scrollTo(0, 0);
}

class RecentEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:1337/events")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response From Server");
        }
        return response.json();
      })
      .then((events) => {
        this.setState({ events: events });
      });
  }

  render() {
    const Color = { color: "#74C043" };
    function truncate(string, n) {
      return string?.length > n ? string.substr(0, n - 1) + " . . ." : string;
    }
    return (
      <div className="mt-4">
        <MDBContainer>
          <MDBRow>
            {this.state.events.map(
              ({ id, eventtitle, eventcontent, eventimage }) => (
                <MDBCol md="4" sm="6">
                  <MDBCard
                    style={{ Height: "28rem" }}
                    className="mx-auto event-card mt-4"
                    border="success"
                  >
                    <MDBCardImage
                      className="img-fluid event-card-image"
                      src={`http://localhost:1337${eventimage.url}`}
                    />
                    <MDBCardBody>
                      <MDBCardTitle className="event-card-title">
                        {eventtitle}
                      </MDBCardTitle>
                      <MDBCardText className="event-card-content text-justify">
                       {truncate (`${eventcontent}`,100) }  
                      </MDBCardText>
                      {/* button */}
                      <div className="text-right" onClick={refreshPage}>
                        <Link to={`/single/${id}`}>
                          <MDBBtn
                            className="text-right rounded"
                            color="success"
                          >
                            Read More
                          </MDBBtn>
                        </Link>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              )
            )}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default RecentEvent;
