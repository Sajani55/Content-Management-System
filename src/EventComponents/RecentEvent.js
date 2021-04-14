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
import UiVisual from "../images/UiVisual.jpg";
import Orientaion from "../images/Orientation.jpg";
import Admission from "../images/Admission.jpg";

const RecentEvent = () => {
  const Color = { color: "#74C043" };
  return (
    <div className="mt-4">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12"  className="text-center">
            <h1>
              Browse Recent <span style={Color}>Events</span>
            </h1>
            <hr className="w-25 mx-auto" />
          </MDBCol>
          <MDBCol md="4">
            <MDBCard
              style={{ width: "22rem" }}
              className="mx-auto event-card"
              border="success"
            >
              <MDBCardImage
                className="img-fluid event-card-image"
                src={UiVisual}
              />
              <MDBCardBody>
                <MDBCardTitle>Orientation 2021</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <div className="text-right">
                  <MDBBtn
                    className="text-right rounded"
                    color="success"
                    to="/SingleEvent"
                  >
                    Read More
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard
              style={{ width: "22rem" }}
              className="mx-auto event-card"
              border="success"
            >
              <MDBCardImage
                className="img-fluid event-card-image"
                src={Admission}
              />
              <MDBCardBody>
                <MDBCardTitle>Summer Admission</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <div className="text-right">
                  <MDBBtn
                    className="text-right rounded"
                    color="success"
                    href="#"
                  >
                    Read More
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard
              style={{ width: "22rem" }}
              className="mx-auto event-card"
              border="success"
            >
              <MDBCardImage
                className="img-fluid event-card-image"
                src={Admission}
              />
              <MDBCardBody>
                <MDBCardTitle>Summer Admission</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <div className="text-right">
                  <MDBBtn
                    className="text-right rounded"
                    color="success"
                    href="#"
                  >
                    Read More
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default RecentEvent;
