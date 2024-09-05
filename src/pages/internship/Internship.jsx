import React from "react";
import "./internship.css";

const internships = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Frontend developers create the visual parts of a website using tools like React, JavaScript, HTML, and CSS. You'll be working on improving UI/UX and adding new features.",
    tasks: ["Develop responsive web interfaces", "Collaborate with backend team", "Improve user experience"],
  },
  {
    id: 2,
    title: "Backend Developer",
    description: "Backend developers focus on server-side logic, working with databases and APIs. Technologies include Node.js, Express, and MongoDB.",
    tasks: ["Develop APIs", "Ensure database scalability", "Implement security measures"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    description: "UI/UX designers create user-centered designs, focusing on the look and feel of the platform, using tools like Figma and Adobe XD.",
    tasks: ["Design wireframes and prototypes", "Conduct user research", "Ensure accessibility standards"],
  },
];

const Internship = () => {
  return (
    <div className="internship-detail">
      <h2>Internships</h2>
      
      <div className="internships-grid">
        {internships.map((internship) => (
          <div key={internship.id} className="internship-card">
            <h3>{internship.title}</h3>
            <p>{internship.description}</p>
            <h4>Key Tasks</h4>
            <ul>
              {internship.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
