// components/Header.tsx
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header-nav" role="navigation">
          <div className="container">
            <a className="link-dark navbar-brand site-title mb-0" href="#">
              PORTFOLIO
            </a>
            
            <ul className="nav">
                <li className="nav-item">
                  <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link">Projects</a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link">Contact</a>
                </li>
              </ul>
          </div>
        </nav>
      </header>
  );
}

export default Header;
