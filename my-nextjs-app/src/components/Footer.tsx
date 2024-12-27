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
        <div className="h4">Amiel Jay Ocier</div>
        <p>Made with NextJS</p>
        <div className="social-nav">
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
