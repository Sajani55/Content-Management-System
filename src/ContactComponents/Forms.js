import React from "react";
import { MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import ContactImg from "../images/contact.png";

const Forms = () => {
  const Color = { color: "#74C042" };
  return (
    <>
      <MDBCol md="5">
        <form>
          <p className="h1 text-center mb-4">
            Inquire <span style={Color}> Now</span>{" "}
          </p>
          <div className="grey-text mt-4">
            <MDBInput
              label="Full Name"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Subject"
              icon="tag"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              type="textarea"
              rows="2"
              label="Your message"
              icon="pencil-alt"
            />
          </div>
          <div className="text-right">
            <MDBBtn outline color="success" className="rounded">
              Send
              <MDBIcon far icon="paper-plane" className="ml-1" />
            </MDBBtn>
          </div>
        </form>
      </MDBCol>

      <MDBCol md="7">
        <img
          src={ContactImg}
          class="img-fluid"
          alt="contact illustrative icon"
        />
      </MDBCol>
    </>
  );
};

export default Forms;
<></>;
