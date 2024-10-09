import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ErrorPage from "./Error";

const CountryDetails = () => {
  //const urlParams = new URLSearchParams(window.location.search);
  //const country = urlParams.get("country");

  const params = useParams();
  const country = params.detail;
  const [info, setinfo] = useState(null);
  const [notfound, setnotfound] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((data) => data.json())
      .then(([data]) => {
        setinfo({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          tld: data.tld,
          languages: Object.values(data.languages).join(","),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(","),
          flags: data.flags.svg,
          borders: [],
        });

        if (!data.borders) {
          // it handles case, if api doesnot have borders feild
          data.borders = [];
        }

        // data.borders.map((bor) => {
        //   // here we are using map method and  on each boundry country we are updating our state variable. so this CountryDetails component should run each time updating the state variable. but react optimize to handle this situation (by minimizing number of component call)
        //   fetch(`https://restcountries.com/v3.1/alpha/${bor}`)
        //     .then((res) => res.json())
        //     .then(([data1]) => {
        //       setinfo((prev) => ({
        //         ...prev,
        //         borders: [...prev.borders, data1.name.common],
        //       }));
        //     });
        // });

        Promise.all(
          data.borders.map((bor) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${bor}`)
              .then((res) => res.json())
              .then(([data1]) => data1.name.common);
          })
        ).then((borders) => {
          setinfo((prev) => ({ ...prev, borders }));
        });
      })
      .catch((err) => {
        setnotfound(true);
      });
  }, [country]);

  if (notfound === true) {
    return <ErrorPage />;
  }

  return info === null ? (
    "loading..."
  ) : (
    <>
      <a href="#" className="back">
        <button className="back back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
      </a>
      <div className="detail">
        <div className="flag">
          <img className="detail-image" src={info.flags} />
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
                      <button className="back-button">{bor}</button>
                    </Link>
                  );
                })}
              </>
            ) : (
              <p>No border countries available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
