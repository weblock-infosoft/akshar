import React, { useState, useRef, useEffect } from "react";
import { Header } from "../../component/header";
import { FaFacebookF } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "../productdetail/productdetail.css";

const Productdetails1 = () => {
  const selectedProduct = useSelector(
    (state) => state.ourproduct.selectedItem2
  );
  const images = [selectedProduct?.image1, selectedProduct?.image3];

  const [mainImage, setMainImage] = useState(images[0]);
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
  const [showModal, setShowModal] = useState(false);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

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

  const form = useRef();

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
          console.log("SUCCESS!");
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
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      sendEmail();
      setIsSubmitting(false);
    }
  }, [formErrors]);

  const handleOpen = () => {
    setShowModal(true);
    console.log("click");
  };
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Header backgroundColor="#2194cb" />
      <div className="detail-bg">
        <div className="detail-width">
          <div className="detail-box">
            <div className="detailsrow row">
              <div className="col-md-12 col-lg-6 col-sm-12 col-12 images-part">
                <div className="image-container">
                  <div className="thumbnail-column">
                    {images.map((image, index) => (
                      <div className="boderBox" key={index}>
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="thumbnail"
                          onClick={() => handleThumbnailClick(image)}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="main-image-column">
                    <img
                      src={mainImage}
                      alt="Main Image"
                      className="main-image"
                    />
                  </div>
                </div>
                <div className="btn-width">
                  <div className="width1"></div>
                  <div className="width2">
                    <button className="action-button1" onClick={handleOpen}>
                      Send Enquiry
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12 col-12 img-footer-part">
                <div className="px-3">
                  <h1 className="mt-4 detail-title">
                    {selectedProduct?.description}
                  </h1>
                  <h3 className="title-color">
                    {selectedProduct.price}
                    <span style={{ color: "black" }}>/Piece</span>
                  </h3>
                  <button className="getBestPrice mt-2" onClick={handleOpen}>
                    Get Best Price
                  </button>
                  <div className="description">
                    <p>{selectedProduct?.details}</p>
                  </div>
                  <div className="product-icons">
                    <p className="mb-0">Share your product</p>
                    <a href="https://www.facebook.com/p/Akshar-Composites-100063581778177/?_rdr">
                      <FaFacebookF className="facebook-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-width my-5 p-5">
          <h5>Product Details</h5>
          <div className="detailspart">
            <div className="part1-width">
              <div className="part1-detail">
                <div className="detail-row1">
                  <p>
                    <b>Supply Ability:</b>
                  </p>
                  <p>1 Piece Per Week</p>
                </div>
                <hr className="hr-line" />
              </div>
              <div className="part2-detail">
                <div className="detail-row1">
                  <p>
                    <b>Sample Policy:</b>
                  </p>
                  <p>
                    Contact us for information regarding
                    <br /> our sample policy
                  </p>
                </div>
                <hr className="hr-line" />
              </div>
            </div>
            <div className="part1-width">
              <div className="part1-detail">
                <div className="detail-row1">
                  <p>
                    <b>Delivery Time:</b>
                  </p>
                  <p className="">1 Week</p>
                </div>
                <hr className="hr-line" />
              </div>
              <div className="part2-detail">
                <div className="detail-row1">
                  <p>
                    <b>Main Domestic Market:</b>
                  </p>
                  <p>All India</p>
                </div>
                <hr className="hr-line" />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>

      {showModal && (
        <div className="modal-container">
          <div className="modal1" onClick={handleClose}>
            <div
              className="modal-content1"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header1">
                <button className="close-button" onClick={handleClose}>
                  X
                </button>
              </div>
              <div className="modal-body1">
                <h4 className="modal-title1 mb-3">
                  Get a price quote for {selectedProduct.title}
                </h4>
                <div className="contact-right modal-form">
                  <form ref={form} onSubmit={handleSubmit} className="form1">
                    <div className="input-box">
                      <input
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
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formValues.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && (
                        <span className="red-text">{formErrors.email}</span>
                      )}
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formValues.phone}
                        onChange={handleChange}
                      />
                      {formErrors.phone && (
                        <span className="red-text">{formErrors.phone}</span>
                      )}
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        name="city"
                        placeholder="City/Country"
                        value={formValues.city}
                        onChange={handleChange}
                      />
                      {formErrors.city && (
                        <span className="red-text">{formErrors.city}</span>
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
                        <option value="FRP Cooling Tower">
                          FRP Cooling Tower
                        </option>
                        <option value="PVC Cooling Tower Fill">
                          PVC Cooling Tower Fill
                        </option>
                        <option value="Industrial Cooling Tower">
                          Industrial Cooling Tower
                        </option>
                      </select>
                      {formErrors.productname && (
                        <span className="red-text">
                          {formErrors.productname}
                        </span>
                      )}
                    </div>
                    <div className="input-box">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formValues.message}
                        onChange={handleChange}
                      />
                      {formErrors.message && (
                        <span className="red-text">{formErrors.message}</span>
                      )}
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        name="quantity"
                        placeholder="Quantity"
                        value={formValues.quantity}
                        onChange={handleChange}
                      />
                      {formErrors.quantity && (
                        <span className="red-text">{formErrors.quantity}</span>
                      )}
                    </div>
                    <div className="modal-footer1">
                      <button type="submit" className="send-button">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Productdetails1;