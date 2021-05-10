import { MDBCol} from "mdbreact";
import ContactHeader from "../images/contactHeader.png"

const ContactHeaderImg = () => {
    return ( 
        <MDBCol md="12" className="contact-header text-center mb-4">
            <img src={ContactHeader} className="img-fluid" alt="contact header image" />
        </MDBCol>
     );
}
 
export default ContactHeaderImg;