import React, { useState, useEffect } from 'react';
import homeImage from "../images/homePage/homePage.jpeg";

export default function Home(props) {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const getAboutData = async () => {
      const response = await fetch("./about.json");
      const data = await response.json();
      setAbout(data);
    };

    getAboutData();
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Hello! I am a Full-Stack Software Engineer. Feel free to explore my projects page.</h1>
        {about && (
          <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
          </div>
        )}
      </div>
      <img className="home-image" src={homeImage} alt="Home" />
    </div>
  );
}