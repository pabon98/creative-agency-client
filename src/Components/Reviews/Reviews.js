import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://creative-agency-server-9jtj.onrender.com/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews)
  return (
    <div className="my-4">
      <h4 className=" text-center ">Our Customers Reviews</h4>
      <div className="review-details mt-4">
        {/* {reviews?.map((review) => (
          <ReviewCard review={review} key={review._id}/>
          
        ))} */}
          <ReviewCard reviews={reviews}></ReviewCard>

      </div>
    </div>
  );
};

export default Reviews;