import React from "react";
import { contactDetails } from "../../Constant";

function ContactBody() {
  return (
    <div className="contact-container--body">
 
      <form className="outline-none">
        <div className="form-first-half">
          <div className="form-first-half-name">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-first-half-mobile">
            <label htmlFor="mobile">Mobie</label>
            <input type="number" name="mobile" id="mobile" />
          </div>
        </div>
        <div className="form-second-half">
          <div className="form-second-half-mobile">
            <label htmlFor="mobile-number">Mobile Number</label>
            <input type="number" name="mobile-number"    id="mobile-number" />
          </div>
          <div className="form-second-half-email">
            {" "}
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-second-half-message">
            {" "}
            <label htmlFor="message">Message</label>
            <input type="text" id="message" />
          </div>
          <div className="form-second-half-send">
            <button type="button">Send Message</button>
          </div>
        </div>
      </form>
      <div className="contact-container--body--contact-details">
        {contactDetails.map((contactDetail) => (
          <div>
            <p className="type">{contactDetail.type}</p>
            <p className="detail">{contactDetail.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactBody;
