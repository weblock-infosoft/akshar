import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.png";

export const Header = ({ backgroundColor }) => {
  const [isOpen, setIsopen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const ToggleSidebar = () => {
    setIsopen(!isOpen);
  };

  const navigate = useNavigate();

  const handleContactPage = () => {
    navigate("/contact-us#contact-form");
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  const handleLinkClick = () => {
    setIsopen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <div
            className={`flex ${isScrolled ? "scrolled" : ""}`}
            style={{ backgroundColor }}
          >
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="header-right">
              <div className="toogle-menu" onClick={ToggleSidebar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64px"
                  height="64px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div
                className={`menu sidebar ${isOpen ? "active" : ""}`}
                style={{ zIndex: 1 }}
              >
                <div className="btn btn-primary close" onClick={ToggleSidebar}>
                  X
                </div>
                <ul>
                  <li>
                    <Link to="/" onClick={handleLinkClick}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" onClick={handleLinkClick}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/ourproducts" onClick={handleLinkClick}>
                      Our Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" onClick={handleLinkClick}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className={`sidebar-overlay ${isOpen ? "active" : ""}`}
                onClick={ToggleSidebar}
              ></div>
              <div className={`head-btn ${isScrolled ? "scrolled" : ""}`}>
                <a
                  href="#"
                  className="btn1 sendbtn"
                  onClick={handleContactPage}
                >
                  SEND SMS
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
