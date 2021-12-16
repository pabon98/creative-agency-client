import React from "react";
import "./service.css";

const Service = (props) => {
  const { name, image, description } = props.service;
  return (
    <div className="col-md-4 my-2">
      <div class="card" style={{ width: "20rem" }}>
        <img  src={image} class="card-img-top w-50 ms-auto me-auto" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <a href="#details" class="btn btn-warning px-3">
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
