import CountryCard from "./CountryCard";
import CountriesData from "../data";

const CountryList = ({cdata}) => {


  return (
    <>
      <div className="country-cards">
        {CountriesData.filter((country) => {
    return country.name.common.toLowerCase().includes(cdata.toLowerCase())
  }).map((country) => {
          return (
            <CountryCard
              image={country?.flags?.svg}
              key={country?.cca3}
              name={country?.name?.common}
              population={country?.population}
              capital={country?.capital?.[0] || "N/A"}
              region={country?.region}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountryList;
