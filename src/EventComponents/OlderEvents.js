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

const OlderEvents = () => {
  return (
    <div className="my-4">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <MDBCard style={{ width: "22rem" }} className="mx-auto event-card">
              <MDBCardImage
                className="img-fluid event-card-image"
                src={UiVisual}
              />
              <MDBCardBody>
                <MDBCardTitle>Community Introduction</MDBCardTitle>
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
            <MDBCard style={{ width: "22rem" }} className="mx-auto event-card">
              <MDBCardImage
                className="img-fluid event-card-image"
                src={Orientaion}
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
                    href="#"
                  >
                    Read More
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard style={{ width: "22rem" }} className="mx-auto event-card">
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
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default OlderEvents;
