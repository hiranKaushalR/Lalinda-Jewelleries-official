import React from "react";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { menu, close } from "../assets";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuIconPosition, setMenuIconPosition] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    function closeSidebarOnOutsideClick(event) {
      // Check if the clicked element is not part of the header
      if (!event.target.closest(".header-container")) {
        setToggleMenu(false); // Close the sidebar
      }
    }

    if (toggleMenu) {
      // Attach event listener when the sidebar is open
      document.body.addEventListener("click", closeSidebarOnOutsideClick);
    }

    // Cleanup function to remove the event listener
    return () => {
      document.body.removeEventListener("click", closeSidebarOnOutsideClick);
    };
  }, [toggleMenu]);

  useEffect(() => {
    // Event listener to detect clicks outside of the navigation bar
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    // Cleanup function
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Adjusting the menu icon position dynamically
    const calculateMenuIconPosition = () => {
      const navBar = document.querySelector(".header-container");
      const menuIcon = document.querySelector(".menu-icon");
      if (navBar && menuIcon) {
        const navBarRect = navBar.getBoundingClientRect();
        setMenuIconPosition(navBarRect.left + 16); // Adjust 16px for padding
      }
    };

    calculateMenuIconPosition();

    // Recalculate position on window resize
    window.addEventListener("resize", calculateMenuIconPosition);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", calculateMenuIconPosition);
    };
  }, []);


  const toggleSidebar = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="header-container">
      <div className="header-container--child">
        <h1>
          <NavLink to="/">LOGO</NavLink>
        </h1>

        {/* Mobile Navigation */}
        <div className="mobile-menu lg:hidden flex" onClick={toggleSidebar}>
          <img src={menu} alt="Menu" className="menu-icon w-8" />
        </div>

        {/* Mobile Navigation Sidebar */}
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              className="fixed top-0 left-0 bg-white min-w-[300px] w-1/4 h-full lg:hidden flex justify-center items-center z-50"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="bg-white min-w-[300px] w-1/4 h-full p-8 rounded-md">
                <div className="flex justify-end" onClick={toggleSidebar}>
                  <img src={close} alt="Close" className="menu-icon w-8" />
                </div>
                <ul className="flex flex-col">
                  <li>
                    <NavLink to="/" onClick={toggleSidebar}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" onClick={toggleSidebar}>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/jewellery" onClick={toggleSidebar}>
                      Jewellery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/offers" onClick={toggleSidebar}>
                      Offers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/new" onClick={toggleSidebar}>
                      What's New
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services" onClick={toggleSidebar}>
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" onClick={toggleSidebar}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Desktop Navigation */}
        <ul className="header-nav-container  hidden lg:flex">
          <li>
            <NavLink to="/" activeClassName="active-styles">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-styles">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/jewellery" activeClassName="active-styles">
              Jewellery
            </NavLink>
          </li>
          <li>
            <NavLink to="/offers" activeClassName="active-styles">
              Offers
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" activeClassName="active-styles">
              What's New
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active-styles">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-styles">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
