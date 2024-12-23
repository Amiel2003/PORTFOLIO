// components/Header.tsx
import React from 'react';

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer className="pt-4 pb-4 text-center bg-light">
    <div className="container">
      <div className="my-3">
        <div className="h4">Walter Patterson</div>
        <p>Web Developer & Mobile Application Developer</p>
        <div className="social-nav">
          <nav role="navigation">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link" href="https://twitter.com/templateflip" title="Twitter">
                  <i className="fab fa-twitter"></i>
                  <span className="menu-title sr-only">Twitter</span>
                </a>
              </li>
              {/* Add other social links similarly */}
            </ul>
          </nav>
        </div>
      </div>
      <div className="text-small text-secondary">
        <div className="mb-1">&copy; Super Folio. All rights reserved.</div>
        <div>
          Design - <a href="https://templateflip.com/" target="_blank" rel="noreferrer">TemplateFlip</a>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
