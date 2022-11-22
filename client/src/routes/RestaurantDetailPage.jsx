import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantAPI from "../APIs/RestaurantAPI";
import { RestaurantsContext } from "../context/RestaurantsContext";
import StarRating from "../components/StarRating";
import { Reviews } from "../components/Reviews";
import AddReview from "../components/AddReview";

export const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);
  const { reviews, setReviews } = useContext(RestaurantsContext);

  const fetchReviews = async () => {
    try {
      const reviews = await RestaurantAPI.get(`/${id}`);
      setReviews(reviews.data.data.reviews);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantAPI.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [reviews]);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          {/* <StarRating /> */}
          <div className="mb-3">
            <Reviews reviews={selectedRestaurant.reviews} />
            <AddReview fetchReviews={fetchReviews} />
          </div>
        </>
      )}
    </div>
  );
};
