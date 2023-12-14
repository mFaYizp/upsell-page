import React, { useEffect, useState } from "react";
import "./announcement.css";
import {
  FavoriteBorderOutlined,
  LocalShippingOutlined,
  PublishedWithChangesOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";

const announcementItems = [
  { icon: <VerifiedOutlined />, text: "30-DAY SATISFACTION GUARANTEE" },
  {
    icon: <LocalShippingOutlined />,
    text: "Free delivery on orders over $40.00",
  },
  { icon: <FavoriteBorderOutlined />, text: "50.000+ HAPPY CUSTOMERS" },
  { icon: <PublishedWithChangesOutlined />, text: "100% Money Back Guarantee" },
];

const Announcement = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % announcementItems.length);
    }, 3000); // Change the interval duration as needed (e.g., 5000ms = 5 seconds)

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="announcement">
      <div className="announcement-container">
        {announcementItems.map((item, index) => (
          <div
            className={`announcement-items ${
              index === activeIndex ? "active" : ""
            }`}
            key={index}
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcement;
