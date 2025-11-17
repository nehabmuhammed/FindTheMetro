import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
     
      <button 
        className="admin-btn"
        onClick={() => navigate("/admin")}
      >
        <i className="ri-admin-line"></i>
        Admin Panel
      </button>

      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-up">
            <h1 className="hero-title">
              Find Your <span className="gradient-text">Metro</span> Train
            </h1>
            <p className="hero-subtitle">
              Real-time metro tracking, station information, and seamless journey planning. 
              Discover the fastest routes and never miss your train again.
            </p>
            <p className="hero-description">
              Our advanced metro finder system helps you navigate the city with ease. 
              Get live updates, arrival times, and the most efficient routes at your fingertips.
            </p>
            
            <button 
              className="cta-button"
              onClick={() => navigate("/findmetro")}
            >
              <i className="ri-train-line"></i>
              Find My Train
            </button>
          </div>

          <div className="hero-images" data-aos="fade-left">
            <div className="image-grid">
              <div className="image-card">
                <img 
                  src="https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/06/shutterstock_660491578-e1529632505461.jpg" 
                  alt="Modern Metro Train" 
                />
                <div className="image-overlay">
                  <span>Modern Trains</span>
                </div>
              </div>
              <div className="image-card">
                <img 
                  src="https://images.livemint.com/img/2021/09/13/1600x900/f6007916-f75e-11ea-b2bb-535a8d08f761_1600404350838_1631496999331.jpg" 
                  alt="Metro Station" 
                />
                <div className="image-overlay">
                  <span>Clean Stations</span>
                </div>
              </div>
              <div className="image-card">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Delhi_metro_rail_network.svg" 
                  alt="Metro Map" 
                />
                <div className="image-overlay">
                  <span>Easy Navigation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Find My Metro?</h2>
          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up">
              <i className="ri-time-line"></i>
              <h3>Real-Time Tracking</h3>
              <p>Live train locations and accurate arrival predictions</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <i className="ri-map-pin-line"></i>
              <h3>Smart Routes</h3>
              <p>Optimal path suggestions with minimal transfers</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <i className="ri-notification-line"></i>
              <h3>Live Alerts</h3>
              <p>Instant notifications for delays and schedule changes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;