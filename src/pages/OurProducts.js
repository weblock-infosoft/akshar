import React from "react";
import { HeroSec } from "../component/hero-sec";
import { Header } from "../component/header";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedItemour } from "../features/OurProductSlice";

import Arrow_right from "../img/arrow-right.svg";
import Product_Img1 from "../img/product-img-1.png";
import Product_Img2 from "../img/product-img-2.png";
import Product_Img3 from "../img/product-img-3.png";
import Product_Img4 from "../img/product-img-4.png";
import Product_Img5 from "../img/product-img-5.png";
import Product_Img6 from "../img/product-img-6.png";
import headerimg1 from "../img/hero-sec.png";
import img1 from "../Assets/images/product1/product 1 img 1.jpg";
import img2 from "../Assets/images/product1/product 1 img 2.jpg";
import img5 from "../Assets/images/product2/product 2 img 2.jpg";
import img6 from "../Assets/images/product2/product 2 img 3.jpg";
import img7 from "../Assets/images/product3/product 3 img 1.jpg";
import img9 from "../Assets/images/product3/product 3 img 3.jpg";
import img10 from "../Assets/images/product4/product 4 img 1.jpg";
import img12 from "../Assets/images/product4/product 4 img 3.jpg";
import img13 from "../Assets/images/product5/product 5 img 1.jpg";
import img17 from "../Assets/images/product5/product 5 img 2.webp";
import img15 from "../Assets/images/product6/product 6 img 2.jpg";
import img16 from "../Assets/images/product6/product 6 img 1.jpg";

const data2 = [
  {
    id: 1,
    image: Product_Img1,
    description: "Industrial FRP Cooling Tower",
    details:
      "For offering the best Industrial Cooling Tower we have been receiving the best feedback. For our range we use the best quality raw material that ensure the durability of our range. In addition to this, clients are assured that each piece they get from us is 100% quality tested. Industrial Cooling Tower that we offer has become the very first choice of clients owing to its quality as well as reasonable prices. We always think of serving them with the best products like we have done this time. ",
    image1: img1,
    image3: img2,
    price: "23,000 INR",
  },
  {
    id: 2,
    image: Product_Img2,
    description: "FRP Cooling Tower",
    details:
      "For offering the best Industrial Cooling Tower we have been receiving the best feedback. For our range we use the best quality raw material that ensure the durability of our range. In addition to this, clients are assured that each piece they get from us is 100% quality tested. Industrial Cooling Tower that we offer has become the very first choice of clients owing to its quality as well as reasonable prices. We always think of serving them with the best products like we have done this time. ",

    image1: img5,
    image3: img6,
    price: "23,000 INR",
  },
  {
    id: 3,
    image: Product_Img3,
    description: "PVC Cooling Tower Fill",
    details:
      "Incorporated with the dream to achieve high level of customer satisfaction we have been offering the best gamut of PVC Cooling Tower Fill. Clients who have given a try to our range are more than satisfied. To make them feel more delighted we have set a reasonable rate structure for our PVC Cooling Tower Fill. In our company quality has never been compromised and the perfect example for this and the proof is this product that is highly preferred by clients.",

    image1: img7,
    image3: img9,
    price: "170 INR",
  },
  {
    id: 4,
    image: Product_Img4,
    description: "Industrial Cooling Tower",
    details:
      "We are company that offers the incomparable quality range of 40 TR Cooling Tower. Since the beginning of our journey we have been working so hard to serve clients with a matchless array. Our range of 40 TR Cooling Tower quality tested and experts check the pieces on different parameters before their delivery. Clients who have used our array are highly satisfied and contact only us. They are even much satisfy by our affordable price structure that make them feel convenient. ",
    image1: img10,

    image3: img12,
    price: "52,000 INR",
  },
  {
    id: 5,
    image: Product_Img5,
    description: "Cooling Tower Nozzle",
    details:
      "Cooling Tower Nozzle that is supplied by our company are high in quality as we always use the best raw material. To cater to the needs of our clients we have maintaining high quality standards. Customers who regularly procure our array of Cooling Tower Nozzle that we never degrade our quality. Even they are assured that they will never receive any defective piece from us. They have trusted us with their money and we value that more than anything.  ",
    image1: img13,

    image3: img17,
    price: "180 INR",
  },
  {
    id: 6,
    image: Product_Img6,
    description: "Square Cooling Tower",
    details:
      "For offering the best range of 50 TR Cooling Tower we have been getting praised by thousands of our valued clients. They are highly satisfied by our quality tested range and our affordable prices give them another reason to get 50 TR Cooling Tower from us only. As an expert we understand the needs of clients and bring-forth to them an array that is at par with the international standards. We have a record of always satisfying clients who have trusted us and associated with us.",
    image1: img16,
    image3: img15,
    price: "70,000 INR",
  },
];

const OurProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProductDetail = (product) => {
    dispatch(setSelectedItemour(product));
    navigate(`/productdetail2/${product.id}`);
    console.log("product", product);
  };

  return (
    <>
      <Header />
      <div>
        <HeroSec title="Our Products" imageSrc={headerimg1} display={false} />
        <section className="product-sec my-80">
          <div class="heading">
            <h2>Products</h2>
          </div>

          <div className="ourproduct-width">
            <div className="row">
              {data2.map((item) => {
                return (
                  <>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 ProductData">
                      <div
                        className="product-page-item  about-hover-box"
                        onClick={() => handleProductDetail(item)}
                      >
                        <div style={{ zIndex: -1 }}>
                          <div className="img-box">
                            <img src={item.image} alt=""></img>
                          </div>
                          <div className="product-text-box">
                            <h3>{item.description}</h3>
                          </div>
                          <div className="text-center">
                            <div
                              className="click-part"
                              onClick={() => handleProductDetail(item)}
                            >
                              <button className="clickhere-btn">
                                {" "}
                                click here
                              </button>
                              <img className="arror-img" src={Arrow_right} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default OurProducts;
