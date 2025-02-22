import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
    <section className="hero bg-primary text-white text-center py-5">
      <div className="container">
        <h1>Find Your Dream Property in Dubai</h1>
        <p>Your perfect home awaits</p>
        <button className="btn btn-light btn-lg">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
