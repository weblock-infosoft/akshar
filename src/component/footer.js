import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="flex2">
            <div className="footer-item contact-footer">
              <div className="footer-logo">
                <Link to="/">
                  <img src={Logo} alt=""></img>
                </Link>
              </div>
              <div className="text-box">
                <p>
                  One Stop Solution For<br/> All  Your Cooling Tower Requirements.
                </p>
              </div>
            </div>
            <div className="footer-item link-footer">
              <div class="heading">
                <h2>Quick Link</h2>
              </div>
              <div className="text-box">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/profile">About</Link>
                  </li>
                  <li>
                    <Link to="/ourproducts">Our Product</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-item logo-footer">
              <div class="heading">
                <h2>Contact Us</h2>
              </div>
              <div className="text-box">
                <div className="in-box">
                  <p>
                    Plot No 36-37, Shubham Industial Park, Mankana Canal  Road,
                    Near Toran Hotel NH.8 Road,Surat - 394325, Gujarat, India
                  </p>
                </div>
                <div className="in-box">
                  <p>Phone : 08045801415</p>
                  <p>Mr Pradip Kathiriya (Proprietor)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer-line"/>
        <p className="footer-last-text">All rights Reserved  by Akshar Composite | Designed & Developed by:<a className="weblock-link" href="https://www.weblockinfosoft.com/"> WEBLOCK INFOSOFT</a></p>
      </footer>
    </div>
  );
};
