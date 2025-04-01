import { useState, useEffect } from "react";

const Display = ({ countries_names, country }) => {
    console.log("hello", countries_names);

    // State to store the selected country for details
  const [selectedCountry, setSelectedCountry] = useState(null);
  
     // Trim country ONLY when checking exact match
    const trimmedCountry = country.trim().toLowerCase();

    // Filter countries based on input
    const filteredCountries = countries_names.filter((c) =>
        c.name.common.toLowerCase().includes(trimmedCountry)
    );

    // Check for exact match when space is added
    const exactMatch = countries_names.find(
        (c) => c.name.common.toLowerCase() === trimmedCountry
    );

    // Handler to show country details
  const countryDetails = (c) => {
    setSelectedCountry(c);
  };

   // Reset selectedCountry when input changes
   useEffect(() => {
    setSelectedCountry(null);
  }, [country]);
  
    return (
      <div>
        {country !== "" &&
          (filteredCountries.length === 0 ? (
            <p>No matches found!</p>
          ) : filteredCountries.length > 10 ? (
            <p>Too many matches, specify another filter</p>
          ) : exactMatch && country.endsWith(" ") ? (
            // If space is added after exact match
            <>
                <h1 key={exactMatch.name.common}>{exactMatch.name.common}</h1>
                <p>capital {exactMatch.capital}</p>
                <p>area {exactMatch.area}</p>
                <h2>Languages</h2>
                <ul>
                    {Object.entries(exactMatch.languages).map(([k, v]) => (
                        <li key={k} >
                            {v}
                        </li>
                    ))}    
                </ul>
              <img src={exactMatch.flags.png} />
            </>
            
          ) : filteredCountries.length === 1 && !country.endsWith(" ") ? (
            // Single match without space
            <>
            <h1 key={filteredCountries[0].name.common}>
              {filteredCountries[0].name.common}
            </h1>
            <p>capital {filteredCountries[0].capital}</p>
            <p>area {filteredCountries[0].area}</p>
            <h2>Languages</h2>
            <ul>
              {Object.entries(filteredCountries[0].languages).map(([k, v]) => (
                <li key={k}>{v}</li>
              ))}
            </ul>
            <img src={filteredCountries[0].flags.png} />
          </>
            
            
          ) : (
            !selectedCountry && (
            <>
              {filteredCountries.map((c) => (
                <>
                    
                    {c.name.common}
                    <button onClick={() => countryDetails(c)} >show</button>
                    <br />
                </>
              
              ))}
            </>
            )
          ))}

          {/* Render selected country details on button click */}
      {selectedCountry && (
        <>
          <h1 key={selectedCountry.name.common}>
            {selectedCountry.name.common}
          </h1>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Area: {selectedCountry.area}</p>
          <h2>Languages</h2>
          <ul>
            {Object.entries(selectedCountry.languages).map(([k, v]) => (
              <li key={k}>{v}</li>
            ))}
          </ul>
          <img src={selectedCountry.flags.png} alt="flag" />
        </>
      )}
      </div>
    );
  };
  
  export default Display;
  