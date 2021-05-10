import { MDBCol } from "mdbreact";
import HeaderImg from "../images/gallery.png";
const Header = () => {
  return (
    <MDBCol md="12" className="gallery-header text-center">
      <img src={HeaderImg} className="img-fluid" alt="" />
    </MDBCol>
  );
};

export default Header;
