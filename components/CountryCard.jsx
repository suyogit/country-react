import React from "react";
import { Link } from "react-router-dom";
// import './CountryDetails.css'

const CountryCard = ({ image, name, population, capital, region, data }) => {
  return (
    <Link to={`/${name}`} state={data}>
      <div className="card">
        <div className="flag-container">
          <img src={image}  className="flag-card"  />
        </div>
        <div className="content">
          <h2 className="country-name">
            <b>{name}</b>
          </h2>
          <p>Population: {population?.toLocaleString("en-IN") || "N/A"}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
