import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ErrorPage from "./Error";
import CountryDetailsShimmer from "./CountryDetailsShimmer";

const CountryDetails = () => {
  //const urlParams = new URLSearchParams(window.location.search);
  //const country = urlParams.get("country"); // This would allow you to get the country parameter from the URL if using query strings

  const params = useParams(); 
  const country = params.detail; 
  const [info, setinfo] = useState(null); // State to store country information
  const [notfound, setnotfound] = useState(false); // State to track if the country was not found
  const [isLoadingBorders, setIsLoadingBorders] = useState(true); // State to manage shimmer effect for borders
  const {state}=useLocation()

// console.log(info)
  function updateCountryData(data)
  {
    setinfo({
      name: data?.name?.common,
      nativeName: data?.name?.nativeName
        ? Object.values(data?.name?.nativeName)[0]?.common
        : "N/A", // Default to "N/A" if native name is missing
      population: data?.population?.toLocaleString("en-IN") || "N/A",
      region: data?.region || "N/A",
      subregion: data?.subregion || "N/A",
      capital: data?.capital || ["N/A"],
      tld: data?.tld || ["N/A"],
      languages: data?.languages
        ? Object.values(data?.languages).join(",")
        : "N/A", // If languages exist thenn join them into a string
      currencies: data?.currencies
        ? Object.values(data?.currencies)
            .map((currency) => currency?.name)
            .join(",")
        : "N/A",
      flags: data?.flags?.svg || "N/A",
      borders: [], 
    });

    if (!data?.borders) {
      // It handles the case where the API does not have borders field
      data.borders = [];
    }

    // data.borders.map((bor) => {
    //   // Here we are using map method and on each boundary country we are updating our state variable. So this CountryDetails component should run each time updating the state variable. But React optimizes to handle this situation (by minimizing the number of component rerenders)
    //   fetch(`https://restcountries.com/v3.1/alpha/${bor}`)
    //     .then((res) => res.json())
    //     .then(([data1]) => {
    //       setinfo((prev) => ({
    //         ...prev,
    //         borders: [...prev.borders, data1.name.common],
    //       }));
    //     });
    // });

    if (data?.borders && data.borders.length > 0) {
      // Only fetch borders if they exist
      Promise.all(
        data.borders.map((bor) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${bor}`)
            .then((res) => res.json())
            .then(([data1]) => data1?.name?.common);
        })
      ).then((borders) => {
       setTimeout(()=> setinfo((prev) => ({ ...prev, borders }))) // Update borders
        setIsLoadingBorders(false);
      });
    } else {
      setIsLoadingBorders(false); // If no borders, stop the loading state
    }
  }

  useEffect(() => {

    if(state)
    {
      updateCountryData(state)
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((data) => data.json())
      .then(([data]) => {
        updateCountryData(data)
      })
      .catch((err) => {
        setnotfound(true); 
      });
  }, [country]); 

  if (notfound === true) {
    return <ErrorPage />; 
  }

  return info === null || isLoadingBorders ? (
    <CountryDetailsShimmer /> 
  ) : (
    <>
      {/* <CountryDetailsShimmer/> */}
      <a href="#" className="back">
        <button className="back back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
      </a>
      <div className="detail">
        <div className="flag">
          <img className="detail-image" src={info.flags} alt={`${info.name} flag`} />
        </div>
        <div className="combined">
          <div className="detail-content">
            <p>
              <b>{info.name}</b>
            </p>
            <div className="left-right">
              <div className="left">
                <p>Native Name: {info.nativeName} </p>
                <p>Population: {info.population}</p>
                <p>Region: {info.region}</p>
                <p>Sub region: {info.subregion}</p>
                <p>Capital: {info.capital.join(" ")}</p>
              </div>
              <div className="right">
                <p>Top Level Domain: {info.tld}</p>
                <p>Currencies: {info.currencies}</p>
                <p>Language: {info.languages}</p>
              </div>
            </div>
          </div>
          <div className="para">
            {info.borders && info.borders.length > 0 ? (
              <>
                <p>Borders: </p>
                {info.borders.map((bor) => {
                  return (
                    <Link to={`/${bor}`} key={bor}>
                      <button className="back-button bor-btn">{bor}</button>
                    </Link>
                  );
                })}
              </>
            ) : (
              <p>No border countries available.</p> // If no borders, show this message
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
