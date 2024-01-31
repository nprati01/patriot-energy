import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-heading">
        <h1> ABOUT US </h1>
      </div>

      <div className="about-container">
        <div className="about-text">
          <p>
            Patriot Energy, based in Midland, Texas, is committed to excellence
            in every aspect. Our dedicated team in Midland stands ready to
            deliver top-notch services marked by quality, safety, and efficiency
            for our valued customers.{" "}
          </p>

          {/* <p>
            Specializing in oil and gas operations, Patriot Energy has
            successfully executed contracts across the vast energy landscapes of
            Texas, New Mexico, and Oklahoma. Building on our achievements and in
            response to the evolving needs of our clients, Patriot Energy has
            proudly ventured into the renewable energy sector.{" "}
          </p> */}

          <p>
            Our expansion into the renewable energy domain involves the
            completion of civil and mechanical work for solar and wind farms
            throughout the nation. Our commitment to excellence
            remains unwavering as we continue to diversify our expertise and
            contribute to the growth of sustainable energy solutions.
          </p>

          <p>
            At Patriot Energy, we take pride in our American heritage and grass
            roots foundation, our team is dedicated to upholding the highest
            standards of service. Whether in the oil and gas sector or the
            dynamic field of renewable energy, Patriot Energy is your trusted
            partner for quality, safety, and efficiency in every endeavor.
          </p>
        </div>
        <div className="about-img">
          <img
            className="img-content"
            src="/images/solar_energy_img01.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
