import React, { useState } from "react";
import "./Services.css";

function Services() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const services = [
    {
      name: "Renewable Construction",
      description:
        "Renewable Construction General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation",
    },
    {
      name: "Oilfield Services",
      description:
        "Oilfield Services General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation",
    },
    {
      name: "Heavy Civil Construction and Equipment",
      description:
        "Heavy Civil Construction and Equipment General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation",
    },
    {
      name: "Water Technology and Treatment",
      description:
        "Water Technology and Treatment General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation",
    },
  ];

  const handleTitleClick = (index) => {
    setCurrentIndex(index === currentIndex ? null : index);
  };

  return (
    <div className="services-container" id="services">
          <h2>SERVICES</h2>

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
            <div className="content-test">
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
