import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://instagram.com/shreshthi_07?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://github.com/shreshthioberoi" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://instagram.com/shreshthi_07?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/shreshthi-oberoi-6a8b4a199?utm_source=share&utm_campaign=share_via&utm_content=profile" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 shreepizza.com</p>
    </div>
  );
}

export default Footer;
