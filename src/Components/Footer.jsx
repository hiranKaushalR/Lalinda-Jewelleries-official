import React from "react";
import { NavLink } from "react-router-dom";
import { socialMedia } from "../Constant";

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-container--body">
        <div className="footer-container--body--description">
          <h1>LOGO</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="footer-container--body--socialmedia">
          {socialMedia.map((social) => (
            <a href={social.link} target="_blank" key={social.id}>
              <img src={social.img}  alt="" />
            </a>
          ))}
        </div>
        <div className="footer-container--body--links">
          <h1>LINK</h1>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="about">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="jewellery">JEWELLERY</NavLink>
            </li>
            <li>
              <NavLink to="offers">OFFERS</NavLink>
            </li>
            <li>
              <NavLink to="new">WHAT'S NEW</NavLink>
            </li>
            <li>
              <NavLink to="services">SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="contact">CONTACT US</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-container--foot">
        <p>All Rights Reserved &copy; 2024. Web Design & Developed by YuhexGlobal</p>
      </div>
    </section>
  );
}

export default Footer;
