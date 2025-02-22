import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Properties = () => {
  return (
    <section className="properties py-5">
      <div className="container">
        <h2 className="text-center mb-4">Featured Properties</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="property1.jpg"
                className="card-img-top"
                alt="Property 1"
              />
              <div className="card-body">
                <h5 className="card-title">Luxury Apartment</h5>
                <p className="card-text">
                  Beautiful apartment in the heart of Dubai.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="property2.jpg"
                className="card-img-top"
                alt="Property 2"
              />
              <div className="card-body">
                <h5 className="card-title">Modern Villa</h5>
                <p className="card-text">Spacious villa with a private pool.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="property3.jpg"
                className="card-img-top"
                alt="Property 3"
              />
              <div className="card-body">
                <h5 className="card-title">Commercial Space</h5>
                <p className="card-text">Prime location for your business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
