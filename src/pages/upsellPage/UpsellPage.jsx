import React from "react";
import "./upsellPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Announcement from "../../components/announcement/Announcement";
import { Done } from "@mui/icons-material";
import Steps from "../../components/steps/Steps";

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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Upsell;
