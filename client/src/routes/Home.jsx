import React from "react";
import { AddRestaurant } from "../components/AddRestaurant";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurant />
    </div>
  );
};
