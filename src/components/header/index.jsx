import React, { useEffect, useState } from "react";
import "./style.scss";
import Button from "react-bootstrap/Button";
import {  NavbarDesktop } from "./navbarDesktop";
import NavbarMobile from "./navbarMobile";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <header>
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      <section>
        <h1 >A modern publishing platform</h1>
        <h2>Grow your audience and build your online brand</h2>
        <span>
          <Button variant="white-000" className="border-0 btn-start">
            Start for Free
          </Button>
          <Button  variant="red-400" className="btn-learn border  border-white">
            Learn More
          </Button>
        </span>
      </section>
    </header>
  );
};
