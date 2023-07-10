import React, { useState, useEffect } from "react";
import "../App.css";
import coffeeImage from "../images/coffeeApp/home.jpeg";
import toDoImage from "../images/toDoApp/home.jpeg";


export default function Projects(props) {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./projects.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [projects]);

  const loaded = () => {
    return (
      <div className="project-slider">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className={`project-slide ${index === currentIndex ? "active" : ""}`}
          >
            <div className="project-content">
              <h1 className="project-title">{project.name}</h1>
              <img
                src={project.name === "best-to-do-app" ? toDoImage : coffeeImage}
                alt={project.name}
                className="project-image"
              />
              <div className="project-buttons">
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <button className="github-button">Github</button>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <button className="live-site-button">Live Site</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="projects-page">
      {projects.length > 0 ? loaded() : <h1>Loading...</h1>}
    </div>
  );
}