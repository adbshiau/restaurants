import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantAPI from "../APIs/RestaurantAPI";
import { RestaurantsContext } from "../context/RestaurantsContext";

export const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantAPI.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return <div>{selectedRestaurant && selectedRestaurant.name}</div>;
};
