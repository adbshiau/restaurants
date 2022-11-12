import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { RestaurantDetailPage } from "./routes/RestaurantDetailPage";
import { Home } from "./routes/Home";
import { UpdatePage } from "./routes/UpdatePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/restaurants/:id/update" element={<UpdatePage />} />
        <Route
          exact
          path="/restaurants/:id"
          element={<RestaurantDetailPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
