import React from 'react';
import { addToDb, deleteFromDB } from '../../Utilities/local storage';

const Cosmetic = (props) => {
    const { id, name, price } = props.cosmetic;
    const handlePurchase = id => {
        // set to local storage
        addToDb(id)
    }
    const handleRemove = id => {
        // set to local storage
        deleteFromDB(id)
    }
    return (
        <div>
            <h2>name: {name}</h2>
            <p>id: {id} Price: ${price}</p>
            <button onClick={() => handlePurchase(id)}>Purchase</button>
            <button onClick={() => handleRemove(id)}>remove</button>
        </div>
    );
};

export default Cosmetic;