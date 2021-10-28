import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src=""
            class="float-left pr-4 pb-3 img-fluid"
            alt="Blake Schumann"
          />
          <p style={{ fontSize: "27px" }}>
            Hello, my name is Blake Schumann, I'm 21 years old and i am currently learning to become a full-stack developer at the University of Adelaide. I am currently residing in Adelaide, South Australia and upon acheiving a completion in this course, i would be insterested in looking for job oppotunities related to all things coding. Other hobbies of mine include video games, all things sport and socialising with friends and family.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;