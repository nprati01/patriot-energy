import React from "react";
import "./Services.css";

function Services() {


  const services = [
    {
      name: "Renewable Contstuction",
      service:
        "General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation, General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation",
    },
    {
      name: "Oilfield Services",
      service:
        "General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation, General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation",
    },
    {
      name: "Heavy Civil Construction and Equipment",
      service:
        "General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation, General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation",
    },
    {
      name: "Water Technology and Treatment",
      service:
        "General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation, General Contracting, Earthwork, Aggregate, Erosion Control, Excavation and Reclamation",
    },
  ];

  return (
    <div className="services-container" id="services">
      <div className="col-sm-7 mx-auto">
        <header className="section-header text-center">
          <span className="h1 d-block">
            <span>❝</span>
          </span>
          <h2>Happy Customers</h2>
        </header>
      </div>

      <div id="flex-container" className="services">
        <div id="left-zone">
          <ul className="list">
              <li key={index} className={`item item-${index}`}>
                <input
                  type="radio"
                  id={`radio_service-${index}`}
                  name="basic_carousel"
                  checked={currentIndex === index}
                />
                <label
                  className={`label_service-${index}`}
                  htmlFor={`radio_service-${index}`}
                >
                  {service.name}
                </label>
                <div className={`content-test content_service-${index}`}>
                  <span
                    className="picto"
                    style={{
                      backgroundImage: `url(${service.imageUrl})`,
                    }}
                  ></span>
                  <h1>{service.name}</h1>
                  <p>{service.quote}</p>
                </div>
              </li>
          </ul>
        </div>
        <div id="right-zone"></div>
      </div>
    </div>
  );
}

export default Services;
