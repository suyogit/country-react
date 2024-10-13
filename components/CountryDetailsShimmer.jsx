import React from "react";
import './CountryDetailsShimmer.css'
const CountryDetailsShimmer = () => {
  return (
    <div className="detail detailed">
      <div className="flag flagshi">
      </div>
      <div className="combined">
        <div className="detail-content">
          <p className="countryname only">
            <b ></b>
            {/* <b>Sierra Leone</b> */}
          </p>
          <div className="left-right">
            <div className="left">
              <p className="countryname"> </p>
              <p className="countryname"></p>
              <p className="countryname"></p>
              <p className="countryname"></p>
              <p className="countryname"></p>
              {/* <p>Native Name: Sierra Leone </p>
              <p>Population: 79,76,985</p>
              <p>Region: Africa</p>
              <p>Sub region: Western Africa</p>
              <p>Capital: Freetown</p> */}
            </div>
            <div className="right">
              <p className="countryname"></p>
              <p className="countryname"></p>
              <p className="countryname"></p>
              {/* <p>Top Level Domain: .sl</p>
              <p>Currencies: Sierra Leonean leone</p>
              <p>Language: English</p> */}
            </div>
          </div>
        </div>
        <div className="para">
          <p className="countryname only"> </p>
          <a href="/Guinea">
            <button className="back-button countryname only bord"></button>
          </a>
          <a href="/Liberia">
            <button className="back-button countryname only bord"></button>
          </a>
          <a href="/Liberia">
            <button className="back-button countryname only bord"></button>
          </a>
          <a href="/Liberia">
            <button className="back-button countryname only bord"></button>
          </a>
          <a href="/Liberia">
            <button className="back-button countryname only bord"></button>
          </a>
        </div>
        {/* <div className="para">
          <p>Borders: </p>
          <a href="/Guinea">
            <button className="back-button">Guinea</button>
          </a>
          <a href="/Liberia">
            <button className="back-button">Liberia</button>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default CountryDetailsShimmer;
