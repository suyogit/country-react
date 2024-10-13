import React from "react";
import "./CountriesListShimmer.css";
import { Link } from "react-router-dom";
const CountriesListShimmer = () => {
  return (
    <div className="country-cards">
      {Array.from({ length: 30 }).map((el, i) => {
        return (
          <Link to="/" key={i}>
            <div className="card shimmer-card "></div>
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesListShimmer;
