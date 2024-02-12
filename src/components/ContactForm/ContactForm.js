import React, { useState } from "react";
import "./ContactForm.css"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/907247a0-f864-11ed-9eca-1f15a141e038"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="form-response">
            <h2>Thank yourou!</h2>
            <p> We Will Be In Touch</p>
        </div>

      </>
    );
  }

  return (
    <div className="form-container">
    <h1>Get In Touch</h1>

    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="form-row">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          className="input-data"
          required
        />
        <div className="underline"></div>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          className="input-data"
          required
        />
      </div>
      <div className="form-row">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input-data"
          required
        />
        <input
          type="phone"
          placeholder="Phone Number"
          name="phone"
          className="input-data"
          required
        />
      </div>
      <div className="form-row">
        <textarea
          placeholder="Your Message"
          name="message"
          className="input-data"
          required
        />
      </div>
      <div className="formButton">
        <button
          className="button"
          type="submit"
        >
          Contact Us
        </button>
      </div>
    </form>

    </div>

  );
};

export default ContactForm;
