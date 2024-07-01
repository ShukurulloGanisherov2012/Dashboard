import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetail() {
    const { name } = useParams();
    const [country, setCountry] = useState();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
            .catch(error => console.error('Error fetching country:', error));
    }, [name]);

    if (!country) {
        return <div>Yuklanmoqda...</div>;
    }
    const handleBack = () => {
        history.back();
    }

    return (
        <>
            <button className='back' onClick={handleBack}>⬅Back</button>
            <div className='detailCard'>
                <img className='img' src={country.flags ? country.flags.png : ''} alt={country.name ? `${country.name.common} flag` : 'Flag'} />
                <div className="txt">
                    <h1 style={{ fontSize: "45px" }}>{country.name ? country.name.common : 'N/A'}</h1>
                    <p style={{ fontSize: "25px" }}><b>Population:</b> {country.population ? country.population.toLocaleString() : 'N/A'}</p>
                    <p style={{ fontSize: "25px" }}><b>Region:</b> {country.region ? country.region : 'N/A'}</p>
                    <p style={{ fontSize: "25px" }}><b>Capital:</b> {country.capital ? country.capital[0] : 'N/A'}</p>
                    <p style={{ fontSize: "25px" }}><b>Subregion:</b> {country.subregion ? country.subregion : 'N/A'}</p>
                    <p style={{ fontSize: "25px" }}><b>Languages:</b> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
                </div>
            </div>
        </>
    );
}

export default CountryDetail;
