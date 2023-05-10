import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flags, capital, population } = props.country;
    return (
        <div className='country bg-success'>
            <h4 className='text-warning'>This is: {name.common}</h4>
            <img src={flags.svg} alt="" />
            <h5>Country Capital: {capital}</h5>
            <h6>Country Population: {population}</h6>
        </div>
    );
};

export default Country;