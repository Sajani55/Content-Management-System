import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
} from "mdbreact";
import UiVisual from "../images/UiVisual.jpg";
import Orientaion from "../images/Orientation.jpg";
import Admission from "../images/Admission.jpg";
import React from 'react';
import {Link} from 'react-router-dom'

class RecentEvent extends React.Component {
  constructor(){
    super()
    this.state = {
        events: []
    }
}

componentWillMount(){
    fetch('http://localhost:1337/events').then((response)=>{
        if(response.status >= 400){
            throw new Error("Bad Response From Server");
        }
        return response.json();
    }).then((events)=>{
        this.setState({events: events});
    })
}

  render(){
  const Color = { color: "#74C043" };
  return (
    <div className="mt-4">{
      this.state.events.map(({id, eventtitle, eventcontent, eventimage})=>(
      <MDBContainer>
        <MDBRow>
          {/* <MDBCol md="12"  className="text-center">
            <h1>
              Browse Recent <span style={Color}>Events</span>
            </h1>
            <hr className="w-25 mx-auto" />
          </MDBCol> */}
          <MDBCol md="4">
            <MDBCard
              style={{ width: "22rem" }}
              className="mx-auto event-card"
              border="success"
            >
              <MDBCardImage
                className="img-fluid event-card-image"
                src={`http://localhost:1337${eventimage.url}`}
              />
              <MDBCardBody>
                <MDBCardTitle>{eventtitle}</MDBCardTitle>
                <MDBCardText>
                {eventcontent}
                </MDBCardText>
                <div className="text-right">
                <Link to = {`/single/${id}`}><MDBBtn
                    className="text-right rounded"
                    color="success"
                    href="#"
                  >
                    Read More
                  </MDBBtn></Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      ))
      }
    </div>
  );
  }
};

export default RecentEvent;
