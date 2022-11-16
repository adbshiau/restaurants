import React from "react";
import StarRating from "./StarRating";

export const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {reviews.map((review) => {
        return (
          <>
            <div className="col" key={review.id}>
              <div className="card text-bg-primary">
                <div className="card-header d-flex justify-content-between">
                  <span>{review.name}</span>
                  <span>
                    <StarRating rating={review.rating} />
                  </span>
                </div>
                <div className="card-body">
                  <p className="card-text">{review.review}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
