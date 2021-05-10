import React from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import Forms from "./Forms";
import Maps from "./Map";
import Header from "./ContactHeader";
import Banner from "../HomeComponents/UnivBanner";

const Contact = () => {
  const Margin = { marginTop: "6rem" };

  return (
    <>
      <MDBContainer style={Margin}>
        <MDBRow>
          <Header />
          <Forms />
          <Maps />
        </MDBRow>
        <Banner />
      </MDBContainer>
    </>
  );
};

export default Contact;
