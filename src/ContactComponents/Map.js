import { MDBCol, MDBIcon } from "mdbreact";
import React from "react";



class Maps extends React.Component {

  constructor() {
    super();
    this.state = {
      mapcontents: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:1337/mapcontents")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response From Server");
        }
        return response.json();
      })
      .then((mapcontents) => {
        this.setState({ mapcontents: mapcontents });
      });
  }

  render() {
    const Color = { color: "#74C042" };
    return (
      <>
        <MDBCol md="6" className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1080.8924195294908!2d85.33065490445235!3d27.711923350916223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1910158959fb%3A0xc274a7c179f20d1a!2sHerald%20College%20Kathmandu%20New%20Facility!5e0!3m2!1sen!2snp!4v1620642264966!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </MDBCol>

        <MDBCol md="6" className="mt-5">
          <h1 className="text-center">
            Find Us <span style={Color}> Here</span>
          </h1>
          {this.state.mapcontents.map(({ first, second, third, fourth }) => (
          <div className="text-left pl-5 ml-5 mt-5">
            <h5 className="mt-4">
              <MDBIcon icon="university" style={Color} /> {first}
            </h5>
            <h5 className="mt-4">
              <MDBIcon icon="map-marker-alt" style={Color} /> {second}
            </h5>
            <h5 className="mt-4">
              <a href="tel:9810000000" style={{ color: "#000000" }}>
                <MDBIcon icon="phone-alt" style={Color} />
                {third}
              </a>
            </h5>

            <h5 className="mt-4">
              <a href="mailto:info@hck.edu.np" style={{ color: "#000000" }}>
                <MDBIcon icon="at" style={Color} />
                {fourth}
              </a>
            </h5>
          </div>
          ))}
        </MDBCol>
      </>

    );
  }
}


export default Maps;
