// components/Header.tsx
import React from 'react';

interface EducationProps {
  title: string;
}

const Education: React.FC<EducationProps> = ({ title }) => {
  return (
    <div className="section pt-4 px-3 px-lg-4" id="about">
  <div className="container-narrow">
    <div className="row">
    
    <br />
      <div className="col-md-6">
        <h2 className="h4 my-2 title-desc">EDUCATION</h2>

        <div className="row mt-3">

          <div className="col-sm-5">
            <div className="pb-1">College</div>
          </div>
          <div className="col-sm-7">
            <div className="pb-1" ><b>Bukidnon State University</b> 
            <p style={{fontSize: "13px"}}>Bachelor of Science in Information Technology</p>
            </div>
          </div>

          <div className="col-sm-5">
            <div className="pb-1">Senior High School</div>
          </div>
          <div className="col-sm-7">
            <div className="pb-1"> <b>Bukidnon National High School</b> <p style={{fontSize: "13px"}}>Humanities and Social Sciences</p></div>
          </div>

          <div className="col-sm-5">
            <div className="pb-1">Junior High School</div>
          </div>
          <div className="col-sm-7">
            <div className="pb-1"> <b>Bukidnon National High School</b> <p style={{fontSize: "13px"}}>Special Program in the Arts</p></div>
          </div>

          <div className="col-sm-5">
            <div className="pb-1">Elementary</div>
          </div>
          <div className="col-sm-7">
            <div className="pb-1"> <b>Malaybalay City Central School</b></div>
          </div>
          
        </div>
      </div>
      <div className="col-md-6 offset-md-0"><img className="avatar img-fluid mt-2" src="images/buksu.jpg" width="600" height="400" alt="Walter Patterson"/></div>
    </div>
  </div>
</div>
  );
}

export default Education;
