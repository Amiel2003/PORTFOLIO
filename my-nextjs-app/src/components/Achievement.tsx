// components/Header.tsx
import React from 'react';

interface AchievementProps {
  title: string;
}

const Achievement: React.FC<AchievementProps> = ({ title }) => {
  return (
<div className="section px-3 px-lg-4 pt-5" id="experience">
  <div className="container-narrow">
    <div className="text-center mb-5">
      <h2 className="title-desc">ACHIEVEMENTS</h2>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="card mb-3">
          <div className="card-header px-3 py-2">
            <div className="d-flex justify-content-between">
              <div>
                <h3 className="h5 mb-1 title-desc">InnoVa (Bukidnon’s First
                  Hackathon Event) KERNEL 2024</h3>
                <div className="text-muted text-small">Participant <small>(June 19, 2024)</small></div>
              </div>
            </div>
          </div>
          <div className="card-body px-3 py-2">
            <p>I have participated in Bukidnon's first ever Hackathon Event in Valencia City Bukidnon. Allowing us to share ideas 
              towards addressing certain issues in certain areas such as health and sustainability.</p>
            <p>The program enable students to further their knowledge towards in problem-solving, teamwork, and innovativion.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-3">
          <div className="card-header px-3 py-2">
            <div className="d-flex justify-content-between">
              <div>
                <h3 className="h5 mb-1 title-desc">BukSU Computer Society
                Academic Mentoring Program</h3>
                <div className="text-muted text-small">MERN Mentor <small>(October 22, 2024)</small></div>
              </div>
            </div>
          </div>
          <div className="card-body px-3 py-2">
            <p>I have been selected to be one of the MERN mentors in our institute's Academic Mentoring Program in the Computer Society. This allowed me to share my knowledge about MERN with my junior students.</p>
            <p>Juniors got the chance to seek advice and knowledge from their seniors who already took their subjects.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-3">
          <div className="card-header px-3 py-2">
            <div className="d-flex justify-content-between">
              <div>
                <h3 className="h5 mb-1 title-desc">10th TOPCIT (Test of Practical
                  Competency in IT) Philippines</h3>
                <div className="text-muted text-small">Competency Level 2 <small>(April 23, 2024)</small></div>
              </div>
            </div>
          </div>
          <div className="card-body px-3 py-2">
            <p>I achieved Competency Level 2 in the 10th TOPCIT (Test of Practical Competency in IT) Philippines. This examination assesses IT professionals' readiness and practical problem-solving skills in real-world scenarios. </p>
            <p>It highlights my proficiency in core IT domains, including programming, database management, and software development, reflecting my ability to tackle industry-relevant challenges effectively</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-3">
          <div className="card-header px-3 py-2">
            <div className="d-flex justify-content-between">
              <div>
                <h3 className="h5 mb-1 title-desc">Bukidnon State University Dean Lister & University Scholar</h3>
                <div className="text-muted text-small">Running for Latin Honors. <small>(2021-2024)</small></div>
              </div>
            </div>
          </div>
          <div className="card-body px-3 py-2">
            <p>I have consistently earned the distinction of being a Dean's Lister and University Scholar at Bukidnon State University from 2021 to 2024. This achievement reflects my commitment to academic excellence and my dedication to maintaining high academic performance.</p>
            <p>As a scholar, I aim to leverage my knowledge to contribute to innovative solutions and excel in the IT field, while working towards Latin Honors.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Achievement;
