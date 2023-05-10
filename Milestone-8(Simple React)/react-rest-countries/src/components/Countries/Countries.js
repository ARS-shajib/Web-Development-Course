import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h1>Hello Countries Component</h1>
            <h4>Number Of Countries: {countries.length}</h4>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        key={country.name.official} // unique key
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;