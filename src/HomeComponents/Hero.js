import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import hero_banner from '../images/hck-logo.png'

const Hero = () => {
  return (
    <div className="mt-4">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="hero-banner-img mt-4 text-center">
              <img src={hero_banner} alt="" className="img-fluid"/>
          </MDBCol>
          <MDBCol md="6" className="mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro
              repellendus eaque enim veritatis ducimus qui quo expedita, ea vel
              recusandae, hic fuga? Molestiae voluptates quisquam exercitationem
              itaque magnam consequuntur.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    
  );
};


export default Hero;
