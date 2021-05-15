import { MDBCol, MDBContainer, MDBRow, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Image from "../images/testimonal.png";

class SingleCourse extends React.Component {
  constructor() {
    super();
    this.state = {
      singlecourses: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:1337/singlecourses")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response From Server");
        }
        return response.json();
      })
      .then((singlecourses) => {
        this.setState({ singlecourses: singlecourses });
      });
  }

  render() {
    const Margin = { marginTop: "6rem" };
    const Color = { color: "#74C043" };
    return (
      <MDBContainer style={Margin}>
        {this.state.singlecourses.map(({ Heading, titlefirst, descfirst, titlesecond, descsecond, titlethird, descthird, image }) => (
        <MDBRow>
          {/* Accordion */}
          <MDBCol md="6" className="my-4">
            <h1 className="mb-4" style={Color}>
              {Heading}
            </h1>
            <Accordion className="course-accordion">
              <AccordionItem>
                <AccordionItemHeading>
                  {/* Heading */}
                  <AccordionItemButton>
                    {titlefirst}
                  </AccordionItemButton>
                </AccordionItemHeading>
                {/* body */}
                <AccordionItemPanel>
                  <p>
                   {descfirst}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              {/* end of 1st content */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {titlesecond}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  {descsecond}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {titlethird}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                   {descthird}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </MDBCol>
          {/* course image */}
          <MDBCol md="6">
            <img src={`http://localhost:1337${image[0].url}`} className="img-fluid" alt="" />
          </MDBCol>
          {/* button back to home */}
        </MDBRow>
        ))}
            <MDBCol md="12" className="text-right mt-4">
            <Link to="/">
              <div className="text-right">
                <MDBBtn color="success" className="rounded">
                  Go Home
                </MDBBtn>
              </div>
            </Link>
          </MDBCol>
      </MDBContainer>
    );
  }
}

export default SingleCourse;
