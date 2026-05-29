import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer id="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-brand">

          <h2>Shatrudhan Kumar</h2>

          <p>
            Thank you for visiting my personal portfolio website.
            I love building modern and creative web experiences.
          </p>

          <p>
            Keep Rising 🚀 Let's connect and build something amazing together.
          </p>

        </div>

        {/* CENTER */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skill">Skill</a>
            </li>
            <li>
              <a href="#Education">Education</a>
            </li>

            <li>
              <a href="#project">Project</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>

        </div>

        {/* RIGHT */}

        <div className="footer-contact">

          <h3>Contact Info</h3>

          <p>
            <i className="ri-phone-fill"></i>
            +91 969XXXX864
          </p>

          <p>
            <i className="ri-mail-fill"></i>
            kumarshatrudhan94263@gmail.com
          </p>

          <div className="social-icons">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-github-fill"></i>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>

            <a
              href="https://www.instagram.com/snx_8een?igsh=MW81eXhtY2x0ajN3Nw=="
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-instagram-line"></i>
            </a>

            <a
              href="https://telegram.org/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-telegram-fill"></i>
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <hr />

        <small>
          Designed with ❤️ by SK | © 2026 All Rights Reserved
        </small>

      </div>

    </footer>
  );
};

export default Footer;