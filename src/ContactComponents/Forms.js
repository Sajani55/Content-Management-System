import React from "react";
import { MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import ContactImg from "../images/contact.png";
import axios from 'axios';

class Forms extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       fullname: '',
       email: '',
       subject: '',
       message: ''
    }
  }
  
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:1337/contacts', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const Color = { color: "#74C042" };
    const {fullname, email, subject, message} = this.state
    return (
      <div>
      <MDBCol md="5">
      <form onSubmit={this.submitHandler}>
        <p className="h1 text-center mb-4">
          Inquire <span style={Color}> Now</span>{" "}
        </p>
        <div className="grey-text mt-4">
          <MDBInput
            label="Full Name"
            icon="user"
            group
            type="text"
            validate
            error="wrong"
            success="right"
            name = 'fullname'
            value = {fullname}
            onChange={this.changeHandler}
          />
          <MDBInput
            label="Email"
            icon="envelope"
            group
            type="email"
            validate
            error="wrong"
            success="right"
            name = 'email'
            value = {email}
            onChange={this.changeHandler}
          />
          <MDBInput
            label="Subject"
            icon="tag"
            group
            type="text"
            validate
            error="wrong"
            success="right"
            name = 'subject'
            value = {subject}
            onChange={this.changeHandler}
          />
          <MDBInput
            type="textarea"
            rows="2"
            label="Your message"
            icon="pencil-alt"
            name = 'message'
            value = {message}
            onChange={this.changeHandler}
          />
        </div>
        <div className="text-right">
          <MDBBtn outline color="success" className="rounded" type="submit">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>

    <MDBCol md="7">
      <img
        src={ContactImg}
        class="img-fluid"
        alt="contact illustrative icon"
      />
    </MDBCol>
    </div>
    );
  }
}


export default Forms;
