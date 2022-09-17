import React from "react";

// styling
import "./testimonials.css";

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="testimonial__card">
      <a href={feedback.url} className="testimonial__card-link">
        <img
          src={feedback.image}
          alt={feedback.title}
          className="testimonial__card-img"
        />

        <h3 className="testimonial__card-name">{feedback.title}</h3>
        <p className="testimonial__card-description">{feedback.description}</p>
      </a>
    </div>
  );
};

export default FeedbackCard;
