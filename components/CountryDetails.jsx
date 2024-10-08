import React, {useEffect, useState} from "react";

const CountryDetails = () => {
  
  const [info, setinfo] = useState(null)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
const country = urlParams.get("country");


    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
  .then((data) => data.json())
  .then(([data]) => {

    setinfo(
      {name:data.name.common,
        nativeName: Object.values(data.name.nativeName)[0].common,
        population:data.population.toLocaleString('en-IN'),
        region:data.region,
        subregion:data.subregion,
        capital:data.capital,
        tld:data.tld,
        languages:Object.values(data.languages).join(','),
        currencies: Object.values(data.currencies).map
        ((currency)=>currency.name).join(','),
        flags:data.flags.svg

      }
    )
  })
  
  }, [])

  return (
   info===null?('loading...'):
    (
    <>
    <a href="#" className="back">
        <button className="back">
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
                <p>Capital: {info.capital.join(' ')}</p>
              </div>
              <div className="right">
                <p>Top Level Domain: {info.tld}</p>
                <p>Currencies: {info.currencies}</p>
                <p>Language: {info.languages}</p>
              </div>
            </div>
          </div>
          <div className="para">
            <p>Borders:</p>
            <a href="?country=North Korea">
              <button>North Korea</button>
            </a>
          </div>
        </div>
      </div>
    </>
    )
  );
};

export default CountryDetails;


