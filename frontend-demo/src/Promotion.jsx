import React from 'react';
import './Promotion.css'; 

// ১. আপনার লোগোটি এখানে ইমপোর্ট করতে হবে (পাথ ঠিক আছে কি না চেক করে নিন)
import globe from './assets/globe.png';
import portfolio from './assets/portfolio.png';
import track from './assets/track.png';
import team from './assets/team.png';

const Promotion = () => {
  return (
    <section className="promotion-container">
      
      <div className="promo-banner">
        <div className="scrolling-text">
          🔥 কোরবানি উপলক্ষে ৭০% ছাড়। অফার সীমিত। আজই যোগাযোগ করুন +8801958486946  🔥
        </div>
      </div>

      <div className="promo-content">
        <div className="promo-left">
          <h2>A Legacy of Growth <br/> & Innovation</h2>
          <p>
            Six Season Group is a dynamic multi-industry business conglomerate founded <br/> 
            with a vision to create lasting impact across diverse sectors. From agriculture to <br/> 
            global trade, garments to logistics, we operate at the intersection of quality and <br/> 
            innovation.
            <br/><br/>
            With a presence spanning multiple continents and a portfolio of six thriving <br/> 
            companies, we continue to expand our horizons while staying rooted in our core <br/> 
            values of trust, excellence and sustainability.
          </p>
        </div>

        <div className="promo-right">
          <div className="grid-box">
            <div className="box-content">
              <img src={globe} alt="Global Reach" className="box-icon" />
              <h2>Global Reach</h2>
              <p>Operations across continents</p>
            </div>
          </div>

          <div className="grid-box">
            <div className="box-content">
              <img src={portfolio} alt="Diverse Portfolio" className="box-icon" />
              <h2>Diverse Portfolio</h2>
              <p>5+ industry verticals</p>
            </div>
          </div>

          <div className="grid-box">
            <div className="box-content">
              <img src={track} alt="Track Record" className="box-icon" />
              <h2>Proven Track Record</h2>
              <p>A decade of excellence</p>
            </div>
          </div>

          <div className="grid-box">
            <div className="box-content">
              <img src={team} alt="Strong Team" className="box-icon" />
              <h2>Strong Team</h2>
              <p>Skilled Professionals</p>
            </div>
          </div>
        </div>
      </div> 
      
    </section>
  );
};

export default Promotion;