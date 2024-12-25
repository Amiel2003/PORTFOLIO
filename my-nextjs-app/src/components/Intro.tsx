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
        <p>I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and master of graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the job done. I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of.</p>
      </div>
      <div className="col-md-5 offset-md-1"><img className="avatar img-fluid mt-2" src="images/intro.jpg" width="400" height="400" alt="Walter Patterson"/></div>
    </div>
  </div>
</div>
  );
}

export default Intro;
