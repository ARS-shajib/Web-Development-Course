import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { name, price, description, img } = service;
    return (
        <div className='service'>
            <img className='p-5' src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className='px-5'>{description}</p>
        </div>
    );
};

export default Service;