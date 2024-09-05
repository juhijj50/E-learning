import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  const internships = [
    { id: 1, title: "Frontend Developer", description: "Work with the latest technologies and frameworks like React and Tailwind CSS to build user-friendly interfaces." },
    { id: 2, title: "Backend Developer", description: "Gain experience in building scalable backend services using Node.js, Express, and MongoDB." },
    { id: 3, title: "UI/UX Designer", description: "Design user-centered interfaces focusing on enhancing the user experience with tools like Figma and Adobe XD." },
  ];

  return (
    <div className="about">
      {/* Our Story Section */}
      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          Established in 2010, our platform started with a simple mission: to make high-quality education accessible to everyone. Over the years, we've grown into a full-fledged e-learning platform offering a diverse range of courses that cater to both beginners and professionals.
        </p>
      </div>

      {/* What Makes Us Different Section */}
      <div className="about-section">
        <h2>What Makes Us Different</h2>
        <p>
          We stand apart by focusing on practical, hands-on learning with real-world projects and personalized mentorship.
        </p>
      </div>

      {/* Our Internships Section */}
      <div className="about-section">
        <h2>Our Internships</h2>
        <p>
          We offer internships to help learners gain hands-on experience while working on live projects.
        </p>

        {/* Internship Cards */}
        <div className="internships-grid">
          {internships.map((internship) => (
            <div key={internship.id} className="internship-card">
              <h3>{internship.title}</h3>
              <p>{internship.description}</p>
              <Link to={"/internships"}>
                <button className="know-more-btn">Know More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
