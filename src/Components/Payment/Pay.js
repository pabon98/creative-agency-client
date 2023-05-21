import React from "react";
import { useParams } from "react-router-dom";

const Pay = () => {
  const {orderId} = useParams();
  
  if(!orderId) {
    console.log('orderId not found ', orderId)
  }
  else{
    console.log(orderId);
  }

  return (
    <div className="my-3">
      <div className="d-flex justify-content-center">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <h2>Payment System Coming Soon...{orderId}</h2>
    </div>
  );
};

export default Pay;
