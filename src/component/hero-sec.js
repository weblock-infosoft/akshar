import React from "react";
import { useNavigate } from "react-router-dom";

export const HeroSec = ({ title, display = false, spanText, imageSrc }) => {
  return (
    <div>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="hero-text-box">
          <div className="banner-container">
            <div className="text-in-box">
              <h1>
                {title} <span>{spanText}</span>
              </h1>
              <p>Customized Fiber Glass Reinforced Composite Products.</p>
              {display && <Cus_btn />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Cus_btn = () => {
  const navigate = useNavigate();
  const handleProducts = () => {
    navigate("/ourproducts");
  };

  return (
    <div className="btn-box">
      <button className="btn1" onClick={handleProducts}>
        OUR PRODUCTS
      </button>
    </div>
  );
};
