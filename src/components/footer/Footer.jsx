import React from "react";
import "./footer.css";
import { LockOutlined } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span>Copyright (C) 2023</span>
          <hr />
          <span>Clarifionsupport@clarifion.com</span>
        </div>
        <div className="footer-right">
          <LockOutlined className="lock-icon" />
          <span>Secure 256-bit SSL encryption.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
