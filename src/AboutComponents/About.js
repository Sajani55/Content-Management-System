import {
    MDBCol,
    MDBContainer,
    MDBRow,
  } from "mdbreact";
  import React from "react";
  import Img from "../images/grad.jpg"
  import Img1  from "../images/grad1.jpg"
  import Img2  from "../images/grad2.jpg"
const About = () => {
    return ( 
      <div>
          <MDBContainer>
              <MDBRow className="bor about-hero" >
              <MDBCol md="12">

              </MDBCol>
                  <MDBCol md="6">
<h2>
    HCK (Herald College Kathmandu)
</h2>
<p>
Herald College Kathmandu provides the best UK university education at most affordable fees. It offers Bachelor Degrees in IT and Business in direct partnership with the University
       of Wolverhampton, UK. Programmes that Herald College Kathmandu offers are flexible and have always aimed to foster a broader based knowledge.
       <br />
       Herald College Kathmandu offers the BSc (Hons) International Business Management and BSc (Hons) in Computer Science qualification from the University of Wolverhampton (WLV).
       <br />
       Considering effort, aptitude and knowledge, Herald College Kathmandu organizes a competition every year where students are awarded with scholarships to participate in 15-Day Summer-Camp organized at the University of Wolverhampton, UK.

</p>
                  </MDBCol>
                  <MDBCol md="6">
                      <img src = {Img} className="img-fluid" />
                      

                  </MDBCol>

                  <MDBCol  className="bor mt-7" md="6">
<h1>
    WHY HCK
</h1>
<p>
Herald College Kathmandu offers direct degrees in Information Technology and Business. The courses are entirely designed, approved and delivered by the University of Wolverhampton, in association with New Zealand. As this is a direct partnership, there are no credit-transfer hassles. The students can complete their entire Bachelors’ degree at Herald College. Our students get full and complete status of an UK undergraduate.
       <br /><br />
       
Lecture-tutorial-workshop methodology of teaching, which is widely practiced in the UK, is adopted at Herald College Kathmandu. Course delivery is skill-driven, rather than just knowledge-oriented and focuses on self-learning and research. Promote leadership and entrepreneurship and also encourage our student to think out-of-the-box and be successful at it.
       <br /><br />
       Herald College Kathmandu offers a high quality academic and social facilities, which will help you get the best possible education, and enjoy your learnings at the same time. You will also have access to excellent university while studying here.
       <br /><br />
       You will receive quality education at Herald College Kathmandu through our nationally and internationally recognised faculties. With both academic and industry experience, the faculties will turn textbook theories into real-life examples and the connections will provide you with a valuable access to professional opportunities and networks.
<h1>
    Herald Certification
</h1> 
</p>
Upon successful completion of the course, the student shall receive Bachelor degree certificate from the University of Wolverhampton.
        <br />
        Teaching facilities and infrastructure meet the international standards set by the university partner.
        <br />
<h1>
RECOGNITION
</h1>
<p>
We are direct partners of a prestigious UK University, with international faculties and guest lecturers.
</p>

                  </MDBCol>
                  <MDBCol md="6">
                      <img src = {Img1} className="img-fluid" />
                      <br></br><br></br><br></br><br></br>
                      <img src = {Img2} className="img-fluid" />


                  </MDBCol>
                  
              </MDBRow>
          </MDBContainer>
      </div>
     );
}
 
export default About;