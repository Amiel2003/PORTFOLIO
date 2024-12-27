// components/Header.tsx
import React from 'react';

interface ExpertiseProps {
  title: string;
}

const Expertise: React.FC<ExpertiseProps> = ({ title }) => {
  return (
<div className="section px-3 px-lg-4 pt-5" id="services" >
    <br />
    <br />
  <div className="container-narrow">
    <div className="text-center mb-5">
      <h2 className='title-desc'>EXPERTISE IN IT</h2>
    </div>
    <div className="text-center">
      <p className="mx-auto mb-3" style={{maxWidth: "600px"}}> I have developed some capabalilties during my IT studnent journey</p>
    </div>
    <div className="row py-3"  style={{display: "flex",flexDirection: "row",alignItems: "center",justifyContent: "center",}} >
    <div className="col-md-3 text-center" style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",}}>
        <img className="mb-2" src="images/services/web-design.svg" width="110" height="110" alt="web design" />
        <div className="h5">Web Design</div>
    </div>

      <div className="col-md-3 text-center" style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",}}>
        <img className="mb-2" src="images/services/graphic-design.svg" width="110" height="110" alt="graphic design"/>
        <div className="h5">Graphic Design</div>
      </div>
      <div className="col-md-3 text-center" style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",}}>
        <img className="mb-2" src="images/services/ui-ux.svg" width="110" height="110" alt="ui-ux"/>
        <div className="h5">UI/UX</div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Expertise;
