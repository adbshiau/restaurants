import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantAPI from "../APIs/RestaurantAPI";

export const UpdateRestaurant = (props) => {
  const { id } = useParams();
  const { restaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantAPI.get(`/${id}`);
      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
      console.log(response);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div className="mb3">Price Range:</div>
        <select
          name="price_range"
          id=""
          className="form-select"
          value={priceRange}
          onChange={(e) => {
            setPriceRange(e.target.value);
          }}
        >
          <option disabled>Price Range</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
          <option value="5">$$$$$</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
