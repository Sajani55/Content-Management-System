import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdbreact";
import UiVisual from "../images/UiVisual.jpg";
import Orientaion from "../images/Orientation.jpg";
import Admission from "../images/Admission.jpg";

const RecentEvent = () => {
  const Color = { color: "#74C043" };
  return (
    <div className="mt-4">
      <MDBContainer>
        <h1>
          Our Recent <span style={Color}>Events</span>
        </h1>
        <hr className="w-25" />
       
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
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
       
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default RecentEvent;
