import React from 'react';

const AboutComponent = () => {
  return (
    <div className="container mt-5">
      <h1>About SkyFly Website</h1>
      <p>
        Welcome to SkyFly website, where you can explore and book a wide range of flights to your dream destinations.
        We are committed to providing you with the best travel experience, ensuring convenience, comfort, and affordability.
      </p>

      <h2>Explore Our Comforts</h2>
      <div className="card-deck mb-5">
        <div className="card">
          <img className="card-img-top" src="image1.jpg" alt="Flight 1" />
          <div className="card-body">
            <h5 className="card-title">Flight to Paradise</h5>
            <p className="card-text">Discover exotic destinations with our flights.</p>
          </div>
        </div>
        <div className="card ">
          <img className="card-img-top" src="image2.jpg" alt="Flight 2" />
          <div className="card-body">
            <h5 className="card-title">City Escape</h5>
            <p className="card-text">Experience the thrill of exploring new cities.</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="image5.jpg" alt="Flight 3" />
          <div className="card-body">
            <h5 className="card-title">Inner Peace</h5>
            <p className="card-text">Relax and unwind on stunning beaches.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
