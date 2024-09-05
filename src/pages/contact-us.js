
import React, { useState, useEffect, useRef } from "react";
import { HeroSec } from "../component/hero-sec";
import User from "../img/user.svg";
import Telehone from "../img/telephone.svg";
import Email from "../img/email.svg";
import img1 from "../img/clients/contact-img.jpg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import headerimg1 from "../img/clients/headerimg6.jpg";
import { useLocation } from "react-router-dom";
import { Header } from "../component/header";

export const ContactUs = () => {
  const [formValues, setFormValues] = useState({
    from_name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    quantity: "",
    productname: "",
    unit: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();
  const contactFormRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form") {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const validate = (values) => {
    let errors = {};

    const nameRegex = /^[A-Za-z\s]+$/;

    if (!values.from_name) {
      errors.from_name = "Name is required";
    } else if (!nameRegex.test(values.from_name)) {
      errors.from_name = "Name can only contain letters and spaces";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Phone number must be exactly 10 digits";
    }
    const cityRegex = /^[A-Za-z\s]+$/;

    if (!values.city) {
      errors.city = "City  is required";
    } else if (!cityRegex.test(values.city)) {
      errors.city = "City  can only contain letters and spaces";
    }


    if (!values.message) {
      errors.message = "Message is required";
    }

    const quantityNumber = parseInt(values.quantity, 10);

    if (!values.quantity) {
      errors.quantity = "Quantity is required";
    } else if (isNaN(quantityNumber)) {
      errors.quantity = "Quantity must be a valid number";
    } else if (quantityNumber < 1 || quantityNumber > 10000) {
      errors.quantity = "Quantity must be between 1 and 10,000";
    }


    if (!values.unit) {
      errors.unit = "Unit is required";
    }

    if (!values.productname) {
      errors.productname = "Product name is required";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      sendEmail();
    } else {
      setIsSubmitting(false);
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_fz3h3x2",
        "template_zig0mwa",
        form.current,
        "T2sBBTEInkIln1-OM"
      )
      .then(
        () => {
          toast.success("Form submitted successfully!");
          setFormValues({
            from_name: "",
            email: "",
            phone: "",
            city: "",
            message: "",
            quantity: "",
            productname: "",
            unit: "",
          });
        },
        (error) => {
          toast.error("Form submission failed!");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <>
      <Header />
      <div>
        <HeroSec title="Contact Us" imageSrc={headerimg1} />
        <section className="contact-us-section my-80">
          <div className="cus-container">
            <div className="heading">
              <h2>Contact Us</h2>
            </div>
            <div className="contact-in">
              <div className="flex">
                <div className="contact-item user-name">
                  <div className="img-box">
                    <img src={User} alt="User" />
                  </div>
                  <div className="contact-inner-text">
                    <p>Mr. Pradip Kathiriya</p>
                  </div>
                </div>
                <div className="contact-item phone-contact">
                  <div className="img-box">
                    <img src={Telehone} alt="Telephone" />
                  </div>
                  <div className="contact-inner-text">
                    <a
                      style={{ textDecoration: "none" }}
                      href="tel:+91 80458 01415"
                    >
                      +91 80458 01415
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="img-box">
                    <img src={Email} alt="Email" />
                  </div>
                  <div className="contact-inner-text">
                    <a href="mailto:akcomposites@gmail.com">
                      akcomposites@gmail.com
                    </a>
                    <a href="mailto:aksharcomp@gmail.com">
                      aksharcomp@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </section >
        <div ref={contactFormRef}>

        </div>
        <div className="sendmsg-part" >
          <section id="contact-form" className="contact-form my-80">
            <div className="cus-container">
              <div className="flex">
                <div className="contact-left">
                  <div className="img-box">
                    <img src={img1} alt="Contact" />
                  </div>
                </div>
                <div className="contact-right">
                  <div className="heading">
                    <h2>SEND US A MESSAGE</h2>
                  </div>
                  <form ref={form} onSubmit={handleSubmit}>
                    <div className="input-box ">
                      <input
                        style={{ padding: "10px" }}
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        value={formValues.from_name}
                        onChange={handleChange}
                      />
                      {formErrors.from_name && (
                        <span className="red-text">{formErrors.from_name}</span>
                      )}
                    </div>
                    <div className="input-box">
                      <input
                        style={{ padding: "10px" }}
                        value={formValues.email}
                        onChange={handleChange}
                        type="text"
                        name="email"
                        placeholder="Your Email"
                      />
                      {formErrors.email && (
                        <span className="red-text">{formErrors.email}</span>
                      )}
                    </div>
                    <div className="input-box">
                      <input
                        style={{ padding: "10px" }}
                        type="text"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                      />
                      {formErrors.phone && (
                        <span className="red-text">{formErrors.phone}</span>
                      )}
                    </div>
                    <div className="input-box">
                      <input
                        style={{ padding: "10px" }}
                        value={formValues.city}
                        onChange={handleChange}
                        type="text"
                        name="city"
                        placeholder="City"
                      />
                      {formErrors.city && (
                        <span className="red-text">{formErrors.city}</span>
                      )}
                    </div>
                    <div className="input-box">
                      <input
                        style={{ padding: "10px" }}
                        type="text"
                        name="quantity"
                        placeholder="Enter Quantity"
                        value={formValues.quantity}
                        onChange={handleChange}
                      />
                      {formErrors.quantity && (
                        <span className="red-text">{formErrors.quantity}</span>
                      )}
                    </div>
                    <div className="input-box">
                      <select
                        className="select"
                        name="productname"
                        value={formValues.productname}
                        onChange={handleChange}
                      >
                        <option value="">Select Product</option>
                        <option value="Industrial FRP Cooling Tower">
                          Industrial FRP Cooling Tower
                        </option>
                        <option value="FRP Cooling Tower">FRP Cooling Tower</option>
                        <option value="PVC Cooling Tower Fill">
                          PVC Cooling Tower Fill
                        </option>
                        <option value="Industrial Cooling Tower">
                          Industrial Cooling Tower
                        </option>
                      </select>
                      {formErrors.productname && (
                        <span className="red-text">{formErrors.productname}</span>
                      )}
                    </div>
                    <div className="input-box">
                      <select
                        className="select"
                        name="unit"
                        value={formValues.unit}
                        onChange={handleChange}
                      >
                        <option value="">Select Unit</option>
                        <option value="kilogram">Kilogram</option>
                        <option value="Tons">Tons</option>
                        <option value="Units">Units</option>
                      </select>
                      {formErrors.unit && (
                        <span className="red-text">{formErrors.unit}</span>
                      )}
                    </div>
                    <div className="input-box">
                      <textarea
                        style={{ padding: "10px" }}
                        name="message"
                        placeholder="Message"
                        value={formValues.message}
                        onChange={handleChange}
                      />
                      {formErrors.message && (
                        <span className="red-text">{formErrors.message}</span>
                      )}
                    </div>
                    <div className="btn-part">
                      <button type="submit" className="send-button">
                        Send
                      </button>
                    </div>
                  </form>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
