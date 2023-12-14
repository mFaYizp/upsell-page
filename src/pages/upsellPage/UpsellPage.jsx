import React from "react";
import "./upsellPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Announcement from "../../components/announcement/Announcement";
import Steps from "../../components/steps/Steps";
import {
  ArrowForward,
  Check,
  LockOutlined,
  Star,
  StarRate,
  Verified,
} from "@mui/icons-material";
import Payment from "../../components/payments/Payment";

const Upsell = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <section className="upsell">
        <div className="page-container">
          <div className="header">
            <span>Wait ! Your Order In Progress.</span>
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing </p>
          </div>
          <Steps />
          <div className="info-component">
            <div className="left">
              <div className="product-img">
                <img
                  src="/assets/product1.png"
                  alt="product"
                  className="product-img"
                />
              </div>
              <div className="review">
                <div className="reviewer">
                  <img
                    src="/assets/reviewer.png"
                    alt="reviewer"
                    className="reviewer-img"
                  />
                  <div className="reviewer-info">
                    <div className="stars">
                      <StarRate fontSize="small" />
                      <StarRate fontSize="small" />
                      <StarRate fontSize="small" />
                      <StarRate fontSize="small" />
                      <StarRate fontSize="small" />
                    </div>
                    <div className="reviewer-detail">
                      <span className="reviewer-name">Ken T.</span>
                      <div className="verified">
                        <Verified fontSize="small" />
                        <span>Verified Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reviewer-command">
                  <p>
                    “As soon as the Clarifions arrived I put one in my bedroom.
                    This was late in the afternoon. When I went to the bedroom
                    in the evening it smelled clean. When I went to bed I felt I
                    could breathe better. Wonderful.”
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="product-desc">
                <h1>
                  <span>ONE TIME ONLY</span> special price for 6 extra Clarifion
                  for only <span>$14 each</span> ($84.00 total!)
                </h1>
                <div className="product-details">
                  <div className="product-img-container">
                    <img src="/assets/product2.png" alt="product-2" />
                  </div>
                  <div className="product-info">
                    <div className="headers">
                      <div className="product-name">
                        <h1>Clarifion Air Ionizer</h1>
                      </div>
                      <div className="product-price">
                        <div className="cut-price">$180</div>
                        <div className="og-price">$84</div>
                      </div>
                    </div>
                    <div className="stars">
                      <Star fontSize="small" />
                      <Star fontSize="small" />
                      <Star fontSize="small" />
                      <Star fontSize="small" />
                      <Star fontSize="small" />
                    </div>
                    <div className="stars-responsive">
                      <Star fontSize="" />
                      <Star fontSize="" />
                      <Star fontSize="" />
                      <Star fontSize="" />
                      <Star fontSize="" />
                    </div>
                    <div className="stock">
                      <img src="/assets/dock-dot.png" alt="indicator" />
                      <span>12 left in Stock</span>
                    </div>
                    <div className="desc">
                      Simply plug a Clarifion into any standard outlet and
                      replace bulky, expensive air purifiers with a simple.
                    </div>
                  </div>
                </div>
                <div className="desc-responsive">
                  Simply plug a Clarifion into any standard outlet and replace
                  bulky, expensive air purifiers with a simple.
                </div>
                <div className="advantages">
                  <div className="advantage">
                    <Check className="check" />
                    <span>
                      Negative Ion Technology may <b>help with allergens</b>
                    </span>
                  </div>
                  <div className="advantage">
                    <Check className="check" />
                    <span>
                      Designed for <b>air rejuvenation</b>
                    </span>
                  </div>
                  <div className="advantage">
                    <Check className="check" />
                    <span>
                      <b>Perfect for every room</b> in all types of places.
                    </span>
                  </div>
                </div>
                <div className="offer">
                  <div className="modulator">%</div>
                  <p>
                    Save <span>53%</span> and get{" "}
                    <span>6 extra Clarifision</span> for only{" "}
                    <span>$14 Each</span>.
                  </p>
                </div>
                <div className="payment">
                  <div className="discount-button">
                    Yes - Claim my discount
                    <ArrowForward />
                  </div>
                  <div className="payment-options">
                    <div className="payment-responsive">
                      <div>Free shipping</div>
                      <hr className="responsive-vertical-hr"/>
                      <div>
                        <LockOutlined fontSize="" className="lock-icon" />
                        Secure 256-bit SSL encryption.
                      </div>
                    </div>
                    <div className="advanced">Free shipping</div>
                    <hr className="advanced-hr" />
                    <div className="advanced">
                      <LockOutlined fontSize="" className="lock-icon" />
                      Secure 256-bit SSL encryption.
                    </div>
                    <hr className="advanced-hr" />
                    <hr className="horizontal-hr"/>
                    <Payment />
                  </div>
                  <div className="info">
                    <span>No thanks, I don't want this.</span>
                  </div>
                </div>
                <div className="guarantee-container">
                  <img src="assets/guarantee.png" alt="guarantee" />
                  <span>
                    If you are not completely thrilled with your Clarifion - We
                    have a <b>30 day satisfaction guarantee</b>. Please refer to
                    our return policy at the bottom of the page for more
                    details. Happy Shopping!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Upsell;
