import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <section className="about bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <p className="text-center mx-auto" style={{ maxWidth: "800px" }}>
          Real Estate Plus is a leading real estate agency in Dubai, offering a
          wide range of properties to suit every need. Our team of experienced
          professionals is dedicated to helping you find your perfect home.
        </p>
      </div>
    </section>
  );
};

export default About;
