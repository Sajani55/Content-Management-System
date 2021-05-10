import { MDBCol, MDBRow } from "mdbreact";
import EventHeaderImg from "../images/event.png";
const EventHeader = () => {
  return (
    <MDBRow>
      <MDBCol className="text-center event-header" md="12">
        <img
          src={EventHeaderImg}
          className="img-fluid"
          alt="event header image"
        />
      </MDBCol>
    </MDBRow>
  );
};

export default EventHeader;
