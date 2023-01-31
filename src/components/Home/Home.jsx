import React from "react";
import "../../styles/Home.css";
import thinkdr from "../../images/thinkdr.png"

export const Home = () => {
  return <div className="home-page">
    <section className="home-first">
      <div>
      <h1>We Provide High<br/>Quality<span className="yellow"> Dental</span> Services</h1>
        <br/><p> Appropriately embrace transparent materials via turnkey niche markets.</p>
        <section>
      <div>
        <button className="primary-button">Get Started</button>
      </div>
      <div>
      <button className="secondary-button">Learn More</button>
      </div>
        </section>
      </div>
      <div>
        <img src={thinkdr} alt="thinkdr" className="thinkdr"/>
      </div>
    </section>
  </div>;
};
