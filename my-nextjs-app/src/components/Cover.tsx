// components/Header.tsx
import React from 'react';

interface CoverProps {
  title: string;
}

const Cover: React.FC<CoverProps> = ({ title }) => {
  return (
    <header>
    <div className="cover bg-light">
      <div className="container px-3">
        <div className="row">
          <div className="col-lg-6 p-2 image-container"><img className="img-fluid cropped-image" src="images/me.png" alt="hello"/></div>
          <div className="col-lg-6">
            <div className="mt-5">
              <p className="lead text-uppercase mb-1">My Name Is</p>
              <h1 className="intro-title">
                AMIEL JAY <span className="highlight">OCIER</span>
              </h1>
              <p className="lead fw-normal mt-3">Web Developer & Designer Intern</p>
              <div className="social-nav" >
                <nav role="navigation">
                  <ul className="nav justify-content-left">
                  <li className="nav-item">
    <a className="nav-link" href="https://x.com/prodbymrepee" title="Twitter" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
        <span className="menu-title sr-only">Twitter</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link" href="https://web.facebook.com/amieljay.ocier/" title="Facebook" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
        <span className="menu-title sr-only">Facebook</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link" href="https://www.instagram.com/mr_epee/profilecard/?igsh=MTd0Y2F2em53YW5kbA==" title="Instagram" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
        <span className="menu-title sr-only">Instagram</span>
    </a>
</li>

                  </ul>
                </nav>
              </div>
              <div className="mt-3" data-aos="fade-up" data-aos-delay="200"><a className="btn btn-primary shadow-sm mt-1 hover-effect" href="#contact">Get In Touch <i className="fas fa-arrow-right"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="wave-bg"></div>
  </header>
  );
}

export default Cover;
