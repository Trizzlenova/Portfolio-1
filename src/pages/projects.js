import { useState, useEffect } from "react";
import coffeeImage from '../images/coffeeApp/home.jpeg';
import toDoImage from '../images/toDoApp/home.jpeg';

export default function Projects(props) {
  const [projects, setProjects] = useState(null);
  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {getProjectsData()}, []);

  const loaded = () => {
    return projects.map((project) => (
      <div key={project.name} className="project">
        <div className="project-heading">
          <h1>{project.name}</h1>
        </div>
        {project.name === 'best-to-do-app' && (
          <img src={toDoImage} alt="To Do App" className="project-image" />
        )}
        {project.name === 'amazing-cups-of-coffee' && (
          <img src={coffeeImage} alt="Coffee App" className="project-image" />
        )}
        <div className="project-buttons">
          <a href={project.git}>
            <button className="github-button">Github</button>
          </a>
          <a href={project.live}>
            <button className="live-site-button">Live Site</button>
          </a>
        </div>
      </div>
    ));
  };  
  
  return projects ? loaded() : <h1>Loading...</h1>;
}