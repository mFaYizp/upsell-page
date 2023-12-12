import React from "react";
import "./announcement.css";
import { VerifiedOutlined } from "@mui/icons-material";

const Announcement = () => {
  return (
    <section className="announcement">
      <div className="announcement-container">
        <div className="announcement-items">
          <VerifiedOutlined />
          <span>30-DAY SATISFACTION GUARANTEE</span>
        </div>
        <div className="announcement-items">
          <VerifiedOutlined />
          <span>Free delivery on orders over $40.00</span>
        </div>
        <div className="announcement-items">
          <VerifiedOutlined />
          <span>50.000+ HAPPY CUSTOMERS</span>
        </div>
        <div className="announcement-items">
          <VerifiedOutlined />
          <span>100% Money Back Guarantee</span>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
