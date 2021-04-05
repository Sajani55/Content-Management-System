import OlderEvents from "./OlderEvents";
import RecentEvent from "./RecentEvent";
import { MDBRow, MDBContainer } from "mdbreact";

const Events = () => {
  const styleObj = {
    marginTop: "6rem",
    
  };
  const greenColor = {
    color: "#74C043",
  }

  return (
    <>
      <div style={styleObj}>
        <RecentEvent />
      </div>
      <MDBContainer>
          <div className="mt-5">
            <h1>
              Browse Older <span style={greenColor}>Events</span>
            </h1>
            <hr className="w-25" />
          </div>
      </MDBContainer>
      <OlderEvents />
      <OlderEvents />
      <OlderEvents />
    </>
  );
};

export default Events;
