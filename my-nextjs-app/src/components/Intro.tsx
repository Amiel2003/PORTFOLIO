// components/Header.tsx
import React from 'react';

interface IntroPops {
  title: string;
}

const Intro: React.FC<IntroPops> = ({ title }) => {
  return (
    <div className="section pt-4 px-3 px-lg-4" id="about">
  <div className="container-narrow">
    <div className="row">
      <div className="col-md-6">
        <h2 className="h4 my-2 title-desc">GREETINGS!</h2>
        <p>Allow this portfolio to showcase the skills, experiences, and projects I have developed during my journey as an IT student. This portfolio serves as a reflection of my growth, dedication, and passion for technology. To start off let me show you what <strong><b>skills</b></strong> I acquire, and these <strong><b>skills</b></strong> are as follows:</p>
          <div className="col-sm-10">
            <div className="pb-1 fw-bolder "><h5 className='title-desc'>Critical Thinking</h5></div>
          </div>
          <div className="col-sm-10">
            <div className="pb-1 fw-bolder title-desc"><h5 className='title-desc'>Effective Communication</h5></div>
          </div>     
          <div className="col-sm-10">
            <div className="pb-1 fw-bolder title-desc"><h5 className='title-desc'>Leadership</h5></div>
          </div>
          <div className="col-sm-10">
            <div className="pb-1 fw-bolder title-desc"><h5 className='title-desc'>Teamwork</h5></div>
          </div>        
         
      </div>
      <div className="col-md-5 offset-md-1"><img className="avatar img-fluid mt-2" src="images/intro.jpg" width="400" height="400" alt="Walter Patterson"/></div>
    </div>
  </div>
</div>
  );
}

export default Intro;
