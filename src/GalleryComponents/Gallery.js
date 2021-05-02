import React from "react";
import fetch from "isomorphic-fetch";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { SRLWrapper } from "simple-react-lightbox";

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      gallery: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:1337/galleries")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response From Server");
        }
        return response.json();
      })
      .then((gallery) => {
        this.setState({ gallery: gallery });
      });
  }

  render() {
    const Margin = { marginTop: "6rem" };
    const Color = { color: "#74C043" };

    return (
      <div>
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

              <MDBCol md="8 my-3 mx-auto">
                <p className="text-justify">
                  They say a picture is worth a thousand words. But I wonder,
                  what else do “they” say? In order to find out I’ve culled
                  together the best quotes on the subject of photography. I hope
                  they inspire you. When words become unclear, I shall focus
                  with photographs. When images become inadequate, I shall be
                  content with silence. A thing that you see in my pictures is
                  that I was not afraid to fall in love with these people. To
                  me, photography is an art of observation. It’s about finding
                  something interesting in an ordinary place… I’ve found it has
                  little to do with the things you see and everything to do with
                  the way you see them
                </p>
              </MDBCol>
            </MDBRow>
            <SRLWrapper>
              <MDBRow>
                {this.state.gallery.map(({ id, title, pictures }) => (
                  <MDBCol md="4" className="my-2 gallery-image">
                    <img
                      src={`http://localhost:1337${pictures.url}`}
                      className="img-fluid rounded"
                      alt=""
                    />
                  </MDBCol>
                ))}
              </MDBRow>
            </SRLWrapper>
          </MDBContainer>
        </MDBContainer>
      </div>
    );
  }
}

export default Gallery;
