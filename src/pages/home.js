import React from 'react';
import homeImage from "../images/homePage/homePage.jpeg";

export default function Home(props) {
  return (
    <div>
      <h1 className="home-heading">Hello! I am a Full-Stack Software Engineer. Feel free to explore my projects page.</h1>
      <img src={homeImage} alt="Home" />
    </div>
  );
}