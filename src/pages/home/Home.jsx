import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import image1 from "../../assets/Screenshot 2024-09-05 022254.png";
import image2 from "../../assets/Screenshot 2024-09-05 022550.png";
import image3 from "../../assets/Screenshot 2024-09-05 022832.png";

const Home = () => {
  const navigate = useNavigate();

  const offers = [
    "20% off on first course",
    "Buy one get one free on select courses",
    "Free trial for 7 days",
    "50% off on all advanced courses",
  ];

  const featuredCourses = [
    { id: 1, name: "Mern Stack", image: image1 },
    { id: 2, name: "Data Science", image: image2 },
    { id: 3, name: "Game Development", image: image3 },
  ];

  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our E-learning Platform</h1>
          <p>Empowering Minds, One Click at a Time</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>

      {/* Offers Section */}
      <div className="offers-section">
        <h3>Avail Our Exclusive Offers</h3> {/* Section title added */}
        <div className="offer-slider">
          {offers.map((offer, index) => (
            <div key={index} className="offer-item">
              {offer}
            </div>
          ))}
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          {featuredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.name} className="course-image" />
              <h3>{course.name}</h3>
              <Link to={"/courses"}><button
                className="know-more-btn"
                onClick={() => navigate(`/courses/${course.id}`)}
              >
                Know More
              </button></Link>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
    </div>
  );
};

export default Home;
