import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
  } from "mdbreact";
  import fetch from 'isomorphic-fetch';
  import React from "react";

  class Testimonial extends React.Component{

    constructor(){
        super()
        this.state = {
          testimonials: []
        }
    }

    componentWillMount(){
        fetch('http://localhost:1337/testimonials').then((response)=>{
            if(response.status >= 400){
                throw new Error("Bad Response From Server");
            }
            return response.json();
        }).then((testimonials)=>{
            this.setState({testimonials: testimonials});
        })
    }

    render(){
        const CardStyle = {
            height: "14rem",
          };
        return(
            <div>
              {
                    this.state.testimonials.map(({id,comments,name})=>(
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
                                      {comments}
                                    </MDBCol>
                                  </MDBRow>
                                </MDBCardBody>
                                <MDBCardFooter text="grey" className="text-right">
                                  {name}
                                </MDBCardFooter>
                              </MDBCard>
                            </MDBCol>
                          </MDBRow>
                        </MDBContainer>
                      </MDBContainer>
                ))
            }              
        </div>
        )
    }
}
  
  export default Testimonial;
  