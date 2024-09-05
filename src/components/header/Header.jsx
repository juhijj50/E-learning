import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Importing Font Awesome icon
import "./header.css";

const Header = ({ isAuth }) => {
  return (
    <header>
      <div className="logo">E-Learning</div>

      <div className="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/internships"}>Internships</Link>
        {isAuth ? (
          <Link to={"/account"}>
            <FaUserCircle className="account-icon" /> {/* Person icon */}
          </Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
