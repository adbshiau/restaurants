import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantAPI from "../APIs/RestaurantAPI";

const AddReview = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [starRating, setStarRating] = useState();
  const [reviewText, setReviewText] = useState();

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const response = await RestaurantAPI.post(`/${id}/addReview`, {
      name,
      review: reviewText,
      rating: starRating,
    });
    console.log(response);
  };

  return (
    <div className="mb-2">
      <form action="" className="mt-2">
        <div className="row mb-2">
          <div className="col-8">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-4">
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              className="form-select"
              value={starRating}
              onChange={(e) => setStarRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            className="form-control"
            placeholder="Add your review here."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitReview}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
