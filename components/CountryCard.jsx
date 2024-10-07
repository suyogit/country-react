import React from "react";

const CountryCard = ({image, name, population, capital, region}) => {
  return (
    <a href={`./countries.html?country=${name.common}`}>
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
    </a>
  );
};

export default CountryCard;
