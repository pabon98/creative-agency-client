import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({service}) => {
  const { _id, name, image, description } = service;
  return (
    <div className="col-md-4 my-2">
      <div className="card" style={{ width: "20rem", height:'400px' }}>
        <img  src={image} className="card-img-top w-50 ms-auto me-auto" alt="service"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          {/* <a href="#details" className="btn btn-warning px-3">
            Details
          </a> */}
           <Link to={`/placeOrder/${_id}`}>
            <button className="btn btn-warning px-3">Place Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
