import { MDBCol, MDBContainer, MDBRow, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Image from "../images/testimonal.png";

const SingleCourse = () => {
  const Margin = { marginTop: "6rem" };
  const Color = { color: "#74C043" };

  return (
    <>
      <MDBContainer style={Margin}>
        <MDBRow>
          {/* Accordion */}
          <MDBCol md="6" className="my-4">
            <h1 className="mb-4" style={Color}>
              Bsc. Hons Computer Science
            </h1>
            <Accordion className="course-accordion">
              <AccordionItem>
                <AccordionItemHeading>
                  {/* Heading */}
                  <AccordionItemButton>
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                {/* body */}
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              {/* end of 1st content */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is free will real or just an illusion?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </MDBCol>
          {/* course image */}
          <MDBCol md="6">
            <img src={Image} className="img-fluid" alt="" />
          </MDBCol>
          {/* button back to home */}
          <MDBCol md="12" className="text-right mt-4">
            <Link to="/">
              <div className="text-right">
                <MDBBtn color="success" className="rounded">
                  Go Home
                </MDBBtn>
              </div>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default SingleCourse;
