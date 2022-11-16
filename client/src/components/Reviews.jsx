import React from "react";
import StarRating from "./StarRating";

export const Reviews = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      <div className="col">
        <div className="card text-bg-primary">
          <div className="card-header d-flex justify-content-between">
            <span>Joan</span>
            <span>
              <StarRating rating={3} />
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">This is awesome!</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-primary">
          <div className="card-header d-flex justify-content-between">
            <span>Joan</span>
            <span>
              <StarRating rating={3} />
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">This is awesome!</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-primary">
          <div className="card-header d-flex justify-content-between">
            <span>Joan</span>
            <span>
              <StarRating rating={3} />
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">This is awesome!</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-primary">
          <div className="card-header d-flex justify-content-between">
            <span>Joan</span>
            <span>
              <StarRating rating={3} />
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">This is awesome!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
