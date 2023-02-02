import React from "react";
import "../../styles/Home.css";
import thinkdr from "../../images/thinkdr.png"
import holdDR from "../../images/holdDR.png"
import shield from "../../images/Shield.png"
import img1 from "../../images/01.png"
import img2 from "../../images/02.png"
import img3 from "../../images/03.png"
import who from "../../images/who.png"


export const Home = () => {
  return <div className="home-page">
    <section className="home-first">
      <div className="home-first-one">
      <h1 className="bigger-text">We Provide High<br/>Quality<span className="yellow"> Dental</span> Services</h1>
        <br/><p className="gray"> Appropriately embrace transparent materials via<br/> turnkey niche markets.</p>
        <section className="two-buttons">
      <div>
        <button className="primary-button">Get Started</button>
      </div>
      <div>
      <button className="secondary-button">Learn More</button>
      </div>
        </section>
      </div>
      <div className="think">
        <img src={thinkdr} alt="thinkdr" className="thinkdr"/>
      </div>
    </section>
    <section className="home-second">
      <div className="home-second-first">
        <div>
        <h1 className="bigger-text">Always<span className="yellow">Lough</span><br/>
        Whenever It's Possible</h1>
        </div>
        <div>
          <img src={holdDR} alt="holding-Dr" className="holding-Dr"/>
        </div>
      </div>
      <div>
        <div>
        <p className="gray"> We also offer treatments that improve the appearance of your smile<br/>
         giving you the confidence boost you deserve. The process or<br/>
         our treatment below.</p>
        </div>
        <div>
          <ul>
            <p><br/>What we provide</p>
            <div className="home-second-second">
            <li className="flexxy"><img src={shield} alt="shield"/>Check ups</li>
            <li className="flexxy"><img src={shield} alt="shield"/>Cosmetic dentistry</li>
            <li className="flexxy"><img src={shield} alt="shield"/>Orthodontics</li>
            <li className="flexxy"><img src={shield} alt="shield"/>Preventative checks</li>
            <li className="flexxy"><img src={shield} alt="shield"/>Emergencies</li>
            <li className="flexxy"><img src={shield} alt="shield"/>Dental implants</li>
            <li className="flexxy"><img src={shield} alt="shield"/>Children's dentistry</li>
            <li className="flexxy"><img src={shield} alt="shield"/>Telephone consultations</li>
            </div>
          </ul>
        </div>
      </div>
    </section>
    <section className="home-third">
        <div>
          <h1 className="bigger-text">What Makes Us More<br/>Special</h1>
        </div>
        <div>
        <h1 className="bigger-text">KEY <span className="yellow">FEATURE</span></h1>
          </div>
    </section>
    <section className="home-fourth">
      <div className="fourth">
        <img src={img1} alt="img1"/>
        <h1>Laser Technology</h1>
        <p className="gray"> Worlds most advanced Diode Laser.<br/>
          Your treatment experience will be<br/>
          relaxing & smooth.</p>
      </div>
      <div className="fourth">
        <img src={img2} alt="img2"/>
        <h1>Painless Injection</h1>
        <p className="gray">Only dental clinic in New York, USA<br/>
        utilising Painless Injection system.<br/>
        You will be amazed!</p>
      </div>
      <div className="fourth">
        <img src={img3} alt="img3"/>
        <h1>Dental  Implant</h1>
        <p className="gray"> 
        30+ years of experience in Dental Implant<br/>
        with specialist care. You will be able to<br/>
        chew properly again!</p>
      </div>
    </section>
    <section>
      <div className="fifth">
        <p> <span className="less-bigger">Let Us Brighten </span><span className="bigger-text">Your Smile!</span></p>
        <p className="line-spaces">Helping patients achieve good dental health & beautiful smile is a privilege & responsibility. For over 30
          <br/>years, we proudly provided the best dental experience in New York. Our comfort-first approach is<br/>
           designed to meet the needs of you & your entire family.</p>
           <button className="another-button">Make an Appointment</button>
           </div>
    </section>
    <section className="home-third">
        <div>
          <h1 className="bigger-text">WHO <span className="yellow">ARE WE</span></h1>
        </div>
        <div>
        <h1 className="bigger-text">Our Glorious <br/>History</h1>
          </div>
    </section>
    <section className="sixth">

    <table>
      <tr>
        <td>
        <div>
        <div className="boxy"></div>
        <div className="who1">
          <img src={who} alt="who"/>
        </div>
      </div>
        </td>
        <td>
        <div className="six-two">
        <div className="bluele">
        <h1 className="less-bigger" id="black" >Our history</h1>
        <p>Dentics is a well-known name in dental and oral care in New York.<br/>
         The journey of this institution started in 1990 under the hands of<br/>
         Dr. Jonathon Doe, Gold Medalist of Harvard University. Dentics <br/>
         dental center has been leading the way in dental treatment in<br/>
         USA for more than 30 years in keeping with the evolution of time<br/>
        and the modernization of the era.</p>
        </div>
        </div>
        </td>
      </tr>
      <tr>
        <td>
        <div className="six-two">
          <div className="bluele">
        <h1 className="less-bigger" id="black">Our history</h1>
        <p>Dentics is a well-known name in dental and oral care in New York.<br/>
         The journey of this institution started in 1990 under the hands of<br/>
         Dr. Jonathon Doe, Gold Medalist of Harvard University. Dentics <br/>
         dental center has been leading the way in dental treatment in<br/>
         USA for more than 30 years in keeping with the evolution of time<br/>
        and the modernization of the era.</p>
        </div>
        </div>
        </td>
        <td>
        <div>
        <div className="boxy"></div>
        <div className="who1">
          <img src={who} alt="who"/>
        </div>
      </div>
        </td>
      </tr>
      <tr>
        <td>
        <div>
        <div className="boxy"></div>
        <div className="who1">
          <img src={who} alt="who"/>
        </div>
      </div>
        </td>
        <td>
          <div className="six-two">
        <div className="bluele">
        <h1 className="less-bigger" id="black">Our history</h1>
        <p>Dentics is a well-known name in dental and oral care in New York.<br/>
         The journey of this institution started in 1990 under the hands of<br/>
         Dr. Jonathon Doe, Gold Medalist of Harvard University. Dentics <br/>
         dental center has been leading the way in dental treatment in<br/>
         USA for more than 30 years in keeping with the evolution of time<br/>
        and the modernization of the era.</p>
        </div>
        </div>
        </td>
      </tr>
    </table>
    </section>
    <section className="seventh">
      <div className="half">
      <p>
      <span className="less-bigger" id="blue">TESTIMONIALS</span><br/> <span className="bigger-text"> What <span className="yellow">Others</span> Are Saying</span>
      </p>
      </div>
    </section>



    <section className="appointement-section">
      
    </section>
  </div>;
};
