import React, { useState } from "react";
import "./Services.css";

function Services() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const services = [
    {
      name: "Renewable Construction",
      description:
        "General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation",
    },
    {
      name: "Oilfield Services",
      description:
        "General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation",
    },
    {
      name: "Heavy Civil Construction and Equipment",
      description:
        "General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation",
    },
    {
      name: "Water Technology and Treatment",
      description:
        "General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation",
    },
  ];

  const handleTitleClick = (index) => {
    setCurrentIndex(index === currentIndex ? null : index);
  };

  return (
    <div className="services-container" id="services">
      <div className="col-sm-7 mx-auto">
        <header className="section-header text-center">
          <h2>Services</h2>
        </header>
      </div>

      <div id="flex-container" className="services">
        <div id="left-zone">
          <ul className="list">
            {services.map((service, index) => (
              <li key={index} className={`item item-${index}`}>
                <input
                  type="radio"
                  id={`radio_service-${index}`}
                  name="services"
                  className="service-radio"
                />
                <label
                  className={`label_service-${index}`}
                  htmlFor={`radio_service-${index}`}
                  onClick={() => handleTitleClick(index)}
                >
                  {service.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div id="right-zone">
          {currentIndex !== null && (
            <div className={`content-test content_service-${currentIndex}`}>
              <h1>{services[currentIndex].name}</h1>
              <p>{services[currentIndex].description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
