import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";

const Contact = () => {
  return (
    <div className="Contact-Info">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Write to us</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
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
              <div className="text-center">
                <MDBBtn outline color="secondary">
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>

          <MDBCol className="bor" md="6">
            <h3 className="text-center">
              <br></br>
              FOR MORE DETAILS
            </h3>
            <br></br>
            <h3 className="text-center">Herald College Kathmandu</h3>
            <h3 className="text-center">Bishalnagar,Handigaon, Kathmandu</h3>
            <h3 className="text-center">
              Phone: 9801022637, 01-4010120, 01-4010121
            </h3>
            <h3 className="text-center">Email: info@heraldcollege.edu.np</h3>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Contact;
