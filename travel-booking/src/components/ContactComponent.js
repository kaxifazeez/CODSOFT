import React from "react";
const ContactComponent = () => {
  return (
    <div className=" justify-content-center">
      <h2 className=" justify-content-center">Contact Options</h2>
        <div className="contact-option">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="instagram.png" alt="Instagram" />
            Instagram
          </a>
        </div>
        <div className="contact-option">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="facebook.png" alt="Facebook" />
            Facebook
          </a>
        </div>
        <div className="contact-option">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="twitter.png" alt="Twitter" />
            Twitter
          </a>
        </div>
        <div className="contact-option">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linkedin.png" alt="LinkedIn" />
            LinkedIn
          </a>
        </div>
      </div>
  );
};

export default ContactComponent;
