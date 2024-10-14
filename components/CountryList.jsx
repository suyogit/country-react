import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

const CountryList = ({ cdata }) => {
  const [CountriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      })
      .catch((err) => {
        console.error("Error fetching countries data:", err);
      });
  }, []);

  return CountriesData.length === 0 ? (
    <CountriesListShimmer />
  ) : (
    //const urlParams = new URLSearchParams(window.location.search);
    //const country = urlParams.get("country"); // This would allow you to get the country parameter from the URL if using query strings

    <>
      <div className="country-cards">
        {CountriesData.filter((country) => {
          return (
            country.name.common.toLowerCase().includes(cdata.toLowerCase()) ||
            country.region.toLowerCase().includes(cdata.toLowerCase())
          );
        }).map((country) => {
          return (
            <CountryCard
              image={country?.flags?.svg}
              key={country?.cca3}
              name={country?.name?.common}
              population={country?.population.toLocaleString()}
              capital={country?.capital?.[0] || "N/A"}
              region={country?.region}
              data={country}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountryList;
