import React, { useEffect, useState } from 'react';
import { add as addition, productTotal } from '../../Utilities/storage';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('./Cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    })
    return (
        <div>
            <h3>Shop my cosmetics!!!</h3>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}></Cosmetic>)
            }
            {
                <p>Total product cost: {productTotal}</p>
            }
        </div>
    );
};

export default Cosmetics;