// after a ton of changes

import React, { useState, useEffect } from "react";
import coffeeImage from '../images/coffeeApp/home.jpeg';
import toDoImage from '../images/toDoApp/home.jpeg';
import '../App.css';

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
            </div>
            <div className="image-container">
              <img
                src={project.name === "best-to-do-app" ? toDoImage : coffeeImage}
                alt={project.name === "best-to-do-app" ? "To Do App" : "Coffee App"}
                className="project-image"
              />
            </div>
            <div className="project-buttons">
              <a href={project.git}>
                <button className="github-button">Github</button>
              </a>
              <a href={project.live}>
                <button className="live-site-button">Live Site</button>
              </a>
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













// from th ismorning


// import React, { useState, useEffect } from "react";
// import coffeeImage from '../images/coffeeApp/home.jpeg';
// import toDoImage from '../images/toDoApp/home.jpeg';
// import '../App.css';

// export default function Projects(props) {
//   const [projects, setProjects] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const getProjectsData = async () => {
//     const response = await fetch("./projects.json");
//     const data = await response.json();
//     setProjects(data);
//   };

//   useEffect(() => {
//     getProjectsData();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [projects]);

//   const loaded = () => {
//     return projects.map((project, index) => (
//       <div key={project.name} className="project">
//         <div className="project-heading">
//           <h1>{project.name}</h1>
//         </div>
//         <div className="project-slider">
//           <div className="slider-images">
//             <img
//               src={project.name === 'best-to-do-app' ? toDoImage : coffeeImage}
//               alt={project.name === 'best-to-do-app' ? 'To Do App' : 'Coffee App'}
//               className={`project-image ${index === currentIndex ? "active" : ""}`}
//               style={{
//                 transform: `translateX(${index === currentIndex ? "0%" : "100%"})`
//               }}
//             />
//           </div>
//         </div>
//         <div className="project-buttons">
//           <a href={project.git}>
//             <button className="github-button">Github</button>
//           </a>
//           <a href={project.live}>
//             <button className="live-site-button">Live Site</button>
//           </a>
//         </div>
//       </div>
//     ));
//   };   

//   return (
//     <div className="projects-page">
//       {projects ? loaded() : <h1>Loading...</h1>}
//     </div>
//   );
// }