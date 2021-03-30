import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="mx-auto">
          <form>
            <p className="h5 text-center mb-4">Sign in to HCK Protal</p>
            <div className="grey-text">
              <MDBInput
                label="Username"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn className="rounded-pill">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
