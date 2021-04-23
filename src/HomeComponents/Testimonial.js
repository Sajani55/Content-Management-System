import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
} from "mdbreact";
import React from "react";
const Testimonial = () => {
  const CardStyle = {
    height: "14rem",
  };
  return (
    <MDBContainer fluid className="testimonial-bg">
      <MDBContainer>
        <MDBRow>
          <MDBCol className="mb-4 text-center" md="12">
            <h1>Testimonial</h1>
          </MDBCol>
          <MDBCol md="6" className="mb-4">
            <MDBCard style={CardStyle} className="text-justify">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet laudantium modi molestias natus magni excepturi,
                    autem similique voluptate enim aliquid sit atque! Eveniet
                    voluptatibus officia fuga,
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <MDBCardFooter text="grey" className="text-right">
                Rohan Manandhar
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="mb-4">
            <MDBCard style={{ height: "14rem" }} className="text-justify">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet laudantium modi molestias natus magni excepturi,
                    autem similique voluptate enim aliquid sit atque! Eveniet
                    voluptatibus officia fuga,
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <MDBCardFooter text="grey" className="text-right">
                Rohan Manandhar
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>{" "}
          <MDBCol md="6" className="mb-4">
            <MDBCard style={{ height: "14rem" }} className="text-justify">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet laudantium modi molestias natus magni excepturi,
                    autem similique voluptate enim aliquid sit atque! Eveniet
                    voluptatibus officia fuga,
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <MDBCardFooter text="grey" className="text-right">
                Rohan Manandhar
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>{" "}
          <MDBCol md="6" className="mb-4">
            <MDBCard style={{ height: "14rem" }} className="text-justify">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet laudantium modi molestias natus magni excepturi,
                    autem similique voluptate enim aliquid sit atque! Eveniet
                    voluptatibus officia fuga, asdadasd das the autos enim
                    aliquid sit atque! Eveniet voluptatibus officia fuga,
                    asdadasd das the autos enim aliquid sit atque! Eveniet
                    voluptatibus officia fuga,
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <MDBCardFooter text="grey" className="text-right">
                Rohan Manandhar
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
};

export default Testimonial;
