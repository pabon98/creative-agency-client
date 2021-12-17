import React from "react";
import './Banner.css'
import frame from '../../images/logos/Frame.png'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div style={{backgroundColor:"#FFC107"}} className="">
      <div className="d-flex justify-content-center align-items-center">
      <div className="col-md-6 my-3">
        <h1>Let’s Grow Your <br /> Brand To The <br /> Next Level</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aliquam.</p>
        <Link to="/loginform">
        <button className="btn btn-dark px-4 ">Hire Us</button>
        </Link>
        <br /><br /><br />
      </div>
      <div className="col-md-6">
          <img width="350px" className="img-fluid" src={frame} alt="" />
          
      </div>
    
      </div>
    </div>
  );
};

export default Banner;
