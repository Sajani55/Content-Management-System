import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import univ_banner from "../images/wlv.jpg";
const UnivBanner = () => {
  return (
    <div>
      <MDBContainer>
        <MDBRow className="mt-4">
          <MDBCol md="12" className="text-center">
            <h1>Our <span style={{ color: "#74C043" }}>University</span> Partner</h1>
            <hr className="w-25 mx-auto" />
          </MDBCol>
          <MDBCol md="12" className="text-center">
            <img src={univ_banner} alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default UnivBanner;
