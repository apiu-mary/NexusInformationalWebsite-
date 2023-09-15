
import React, { useEffect, useState } from "react";
import './style.css';
const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const shouldHideBackground = windowWidth <= 700;
  return (
    <div className={`home ${shouldHideBackground ? 'hide-background' : ''}`}>
      <div className="background">
        <h1>Realtime Monitoring Of Power</h1>
      </div>
    </div>
  );
};
export default Home;