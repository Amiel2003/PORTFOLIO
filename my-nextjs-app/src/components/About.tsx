// components/Header.tsx
import React from 'react';

interface AboutProps {
  title: string;
}

const About: React.FC<AboutProps> = ({ title }) => {
  return (
    <div className="section pt-4 px-3 px-lg-4" id="about">
  <div className="container-narrow">
    <div className="row">
      <div className="col-md-6">
        <h2 className="h4 my-2 title-desc">Hello! I’m Amiel Jay Ocier.</h2>
        <p>An enthusiastic 4th year student who is ready to apply the
          academic knowledge and hands-on skills in a real-world
          internship setting. Eager to learn, collaborate, and
          contribute to a dynamic team, I am looking for an
          opportunity to gain valuable experience, further develop
          my expertise, and make a positive impact in the IT field.</p>
        <div className="row mt-3">
          <div className="col-sm-2">
            <div className="pb-1">Age:</div>
          </div>
          <div className="col-sm-10">
            <div className="pb-1 fw-bolder">21</div>
          </div>
          <div className="col-sm-2">
            <div className="pb-1">Email:</div>
          </div>
          <div className="col-sm-10">
            <div className="pb-1 fw-bolder">2101102216@student.buksu.edu.ph</div>
          </div>
          <div className="col-sm-2">
            <div className="pb-1">Phone:</div>
          </div>
          <div className="col-sm-10">
            <div className="pb-1 fw-bolder">+63 953 806 9911</div>
          </div>
          <div className="col-sm-2">
            <div className="pb-1">Address:</div>
          </div>
          <div className="col-sm-10">
            <div className="pb-1 fw-bolder">Purok 10, Poblacion,
            Cabanglasan, Bukidnon</div>
          </div>
          <div className="col-sm-2">
            <div className="pb-1">Status:</div>
          </div>
          <div className="col-sm-10">
            <div className="pb-1 fw-bolder">Single</div>
          </div>
        </div>
      </div>
      <div className="col-md-5 offset-md-1"><img className="avatar img-fluid mt-2" src="images/grad.jpg" width="400" height="400" alt="Walter Patterson"/></div>
    </div>
  </div>
</div>
  );
}

export default About;
