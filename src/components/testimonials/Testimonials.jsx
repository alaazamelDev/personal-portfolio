import React from "react";
import FeedbackCard from "./FeedbackCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// styling
import "./testimonials.css";
import { feedbacks } from "../../models/testimonial";

const Testimonials = () => {
  return (
    <section className=" container section" id="testimonials">
      <h3 className="section__title">Testimonials</h3>
      <span className="section__subtitle">What do My clients say?</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        spaceBetween={12}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        }}
        modules={[Pagination]}
      >
        {feedbacks.map((feedback) => {
          return (
            <SwiperSlide key={feedback.id} style={{ height: "100%" }}>
              <FeedbackCard feedback={feedback} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
