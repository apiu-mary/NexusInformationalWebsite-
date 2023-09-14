import React, { useEffect, useState } from "react";
import './style.css';

const Home = () => {
  // State to keep track of the screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update windowWidth when the window is resized
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add event listener to window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine whether to hide the background based on screen width
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
