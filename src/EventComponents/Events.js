import {
  MDBContainer,
  MDBBtn,
} from "mdbreact";

import RecentEvent from "./RecentEvent";


const Events = () => {
  const styleObj = {
    marginTop: "6rem",
  };
  const greenColor = {
    color: "#74C043",
  };

  return (
    <>
      <MDBContainer style={styleObj}>
        <div className="mt-5">
          <h1>
            Browse All <span style={greenColor}>Events</span>
          </h1>
          <hr className="w-25" />
        </div>
      </MDBContainer>
      <RecentEvent />
    </>
  );
};

export default Events;
