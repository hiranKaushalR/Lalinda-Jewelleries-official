import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header className="header-container">
      <div className="header-container--child">
        {/* You can consider this <NavLink></NavLink> tag as <a></a> tags */}

        <h1>
          {" "}
          <NavLink to="/"> LOGO</NavLink>
        </h1>

        <ul className="header-nav-container">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-styles" : 'non-active-styles')}
            >
              Home
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active-styles" : 'non-active-styles')}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="jewellery"
              className={({ isActive }) => (isActive ? "active-styles" : 'non-active-styles')}
            >
              Jewellery
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              to="offers"
              className={({ isActive }) => (isActive ? "active-styles" : 'non-active-styles')}
            >
              Offers{" "}
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              to="new"
              className={({ isActive }) => (isActive ? "active-styles" : 'non-active-styles')}
            >
              What's New
            </NavLink>
          </li>

          <li>
            <NavLink
              to="services"
              className={({ isActive }) => (isActive ? "active-styles" : 'non-active-styles')}
            >
              Services
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? "active-styles" : 'non-active-styles')}
            >
              Contact{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
