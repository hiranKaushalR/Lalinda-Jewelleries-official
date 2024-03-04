import React from "react";
import { contactDetails } from "../../Constant";

function ContactBody() {
  return (
    <div className="contact-container--body">
      <div className="contact-container--body--contact-details">
        {contactDetails.map((contactDetail) => (
          <div>
            <p className="type">{contactDetail.type}</p>
            <p className="detail">{contactDetail.detail}</p>
          </div>
        ))}
      </div>
      <form>
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
          <div className="">
            <label htmlFor="mobile-number">Mobile Number</label>
            <input type="number" name="mobile-number" id="mobile-number" />
          </div>
          <div className="">
            {" "}
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="">
            {" "}
            <label htmlFor="message">Message</label>
            <input type="text" id="message" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactBody;
