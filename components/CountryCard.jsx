import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({image, name, population, capital, region}) => {
  return (
    <Link to={`/${name}`}>
      <div className="card">
        <img src={image} />
        <div className="content">
          <h2 className="country-name">
            <b>{name}</b>
          </h2>
          <p>Population: {population?.toLocaleString('en-IN') || 'N/A'}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
