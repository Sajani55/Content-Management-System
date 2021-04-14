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
import RecentEvent from "./RecentEvent";

const SingleEvent = () => {
  return (
    <>
      <MDBCol md="12">
        <MDBCard border="success">
          <MDBCardImage
            className="img-fluid mx-auto rounded"
            src={UiVisual}
            style={{ height: "90vh" }}
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h1>Card title</h1>
            </MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Porro expedita minima id corrupti aut autem
              atque placeat accusamus, esse sint possimus nam consequuntur,
              laborum illum. In laboriosam tempora expedita perspiciatis.
            </MDBCardText>
            <div className="text-right">
                {/* <a href="">Home</a> */}
                <MDBBtn color="success" className="rounded">Go Home</MDBBtn>

            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <RecentEvent />
    </>
  );
};

export default SingleEvent;
