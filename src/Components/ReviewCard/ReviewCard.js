import React from "react";
import Rating from "react-rating";
import "./ReviewCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ReviewCard = ({ reviews }) => {
  return (
    <div className="mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <img
              src={review.imageUrl}
              className="rounded-circle"
              width={80}
              height={80}
              alt="person"
            />
            <h5 className="text-center">Customer Name: {review.title}</h5>

            <Rating
              initialRating={review.rating}
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
              readonly
            ></Rating>
            <p>
              Comments: <span className="title">{review.comments}</span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewCard;
