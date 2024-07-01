import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    return (
        <div>
            <h1>Countries</h1>
            <div className="country-list">
                {countries.map(country => (
                    <Link to={`/country/${country.name.common}`} key={country.cca3} className="card">
                        <img src={country.flags.png} alt={`${country.name.common} flag`} />
                        <div className="card-text">
                            <h3>{country.name.common}</h3>
                            <p><b>Population:</b> {country.population.toLocaleString()}</p>
                            <p><b>Region:</b> {country.region}</p>
                            <p><b>Capital:</b> {country.capital ? country.capital[0] : 'N/A'}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
