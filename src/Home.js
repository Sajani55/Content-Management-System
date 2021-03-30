import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";
import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.jpg";

const CarouselPage = () => {
  return (
    <MDBContainer fluid className="p-0">
      <MDBCarousel activeItem={1} length={3} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={slide1} alt="First slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>

            <MDBCarouselCaption>
              <h1 className="h3-responsive">Herald College Kathmandu</h1>
              <p>Affordable | Trustable | Reliable</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src={slide2} alt="Second slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h1 className="h3-responsive">University of Wolverhampton</h1>
              <p>Our University Partner</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src={slide3} alt="Third slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h1 className="h3-responsive">Passion and Enthustiac</h1>
              <p>Our Student are all around Globe</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
