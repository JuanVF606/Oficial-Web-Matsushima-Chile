import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} IKO Matsushima Chile. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
