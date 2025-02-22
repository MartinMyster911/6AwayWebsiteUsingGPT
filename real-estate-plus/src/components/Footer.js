import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container text-center">
        <p>&copy; 2023 Real Estate Plus. All rights reserved.</p>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
