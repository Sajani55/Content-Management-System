import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../images/Admission.jpg";
import Image2 from "../images/grad.jpg";
import Image3 from "../images/christmas.jpg";
import Image4 from "../images/lockdown.jpg";
import Image5 from "../images/PP1.jpg";
import Camera from "../images/camera.png";


const GalleryImages = () => {
  const Margin = { marginTop: "6rem" };
  const Color = { color: "#74C043" };
  return (
    <>
      <MDBContainer className="grey gallery-page lighten-4" fluid>
        <MDBContainer style={Margin}>
          <MDBRow className="mb-2">
            <MDBCol md="12">
              <h1>
                Moments at <br />{" "}
                <span style={Color}>
                  <b>HCK</b>
                </span>
              </h1>
            </MDBCol>

            <MDBCol md="8 my-3">
                <p className="text-justify">
                They say a picture is worth a thousand words. But I wonder, what else do “they” say? In order to find out I’ve culled together the best quotes on the subject of photography. I hope they inspire you. When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence. A thing that you see in my pictures is that I was not afraid to fall in love with these people. To me, photography is an art of observation. It’s about finding something interesting in an ordinary place… I’ve found it has little to do with the things you see and everything to do with the way you see them
                </p>
            </MDBCol>

          </MDBRow>
          <SRLWrapper>
            <MDBRow>
              <MDBCol md="4" className="my-2">
                <img src={Image1} className="img-fluid rounded" alt="" />
              </MDBCol>
              <MDBCol md="4" className="my-2">
                <img src={Image2} className="img-fluid rounded" alt="" />
              </MDBCol>
              <MDBCol md="4" className="my-2">
                <img src={Image3} className="img-fluid rounded" alt="" />
              </MDBCol>
              <MDBCol md="4" className="my-2">
                <img src={Image4} className="img-fluid rounded" alt="" />
              </MDBCol>
              <MDBCol md="4" className="my-2">
                <img src={Image5} className="img-fluid rounded" alt="" />
              </MDBCol>
            </MDBRow>
          </SRLWrapper>
        </MDBContainer>
      </MDBContainer>
    </>
  );
};

export default GalleryImages;
