import React from "react";
import "../../styles/Footer.css";
import insta from "../../images/instagram.png";
import faceb from "../../images/facebook.png";
import twit from "../../images/twitter.png";
import yout from "../../images/youtube.png";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-bar-sec2">
      <h2>Connect With Us</h2>
        <ul className="socialicon">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="facebook" src={faceb} alt="facebook"></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="instagram" src={insta} alt="instagram"></img>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <img className="twitter" src={twit} alt="twitter"></img>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img className="youtube" src={yout} alt="youtube"></img>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bar-sec4">
        <div className="Map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26496.124608916696!2d35.48677272141671!3d33.88925268661702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut!5e0!3m2!1sen!2slb!4v1674946163797!5m2!1sen!2slb"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/*  */}
    </footer>
  );
};
