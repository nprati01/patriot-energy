import React from "react";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-title">
        <h1>Contact Us</h1>
        <p> Patriot Energy is happy to serve you! Interested in becoming a valued customer? Send us a message and well be in touch</p>
      </div>
      <div className="contact-form">
        <form>
          <label>
            First Name:
            <input type="text" />
          </label>
          <label>
            Last Name:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="text" />
          </label>
          <label>
            Phone Number:
            <input type="text" />
          </label>
          <label>
            Message:
            <textarea></textarea>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
