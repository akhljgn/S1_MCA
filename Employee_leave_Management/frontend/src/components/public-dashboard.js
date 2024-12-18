import React from "react";
import "./style1.css";

const PublicDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="public-dashboard">
        <h3>Welcome to OFFTheClock</h3>
        <p>
          Explore features, learn about the system, just by log in to your
          account.
        </p>
        <div className="container2">
          <h2 className="h2db">Features</h2>
          <div className="style1">
            <div className="card" style={{ width: "250px", height: "250px" }}>
              <img
                src="img1.jpg"
                className="card-img"
                alt="..."
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <div className="card-img-overlay">
                <h5 className="card-title" style={{ fontSize: "20px" }}>
                  Card title
                </h5>
                <p className="card-text" style={{ fontSize: "12px" }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>

            <div className="card" style={{ width: "250px", height: "250px" }}>
              <img
                src="img2.jpg" // Add the image source here
                className="card-img"
                alt="..."
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <div className="card-img-overlay">
                <h5 className="card-title" style={{ fontSize: "20px" }}>
                  Card title
                </h5>
                <p className="card-text" style={{ fontSize: "12px" }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>

            <div className="card" style={{ width: "250px", height: "250px" }}>
              <img
                src="img3.jpg" // Add the image source here
                className="card-img"
                alt="..."
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <div className="card-img-overlay">
                <h5 className="card-title" style={{ fontSize: "20px" }}>
                  Card title
                </h5>
                <p className="card-text" style={{ fontSize: "12px" }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>

            <div className="card" style={{ width: "250px", height: "250px" }}>
              <img
                src="img4.jpg" // Add the image source here
                className="card-img"
                alt="..."
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <div className="card-img-overlay">
                <h5 className="card-title" style={{ fontSize: "20px" }}>
                  Card title
                </h5>
                <p className="card-text" style={{ fontSize: "12px" }}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicDashboard;
