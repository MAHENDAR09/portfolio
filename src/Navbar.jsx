import React, { useEffect, useState } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav className={`navbar navbar-expand-lg fixed-top navbar-scroll ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <a className="navbar-brand" href="#">MyPortfolio</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((section) => (
                <li className="nav-item" key={section}>
                  <a className="nav-link" href={`#${section.toLowerCase()}`}>
                    {section}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://drive.google.com/file/d/1mS7YLtMFeTwNKJpbDXVcAd_DwGeU6W6w/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


