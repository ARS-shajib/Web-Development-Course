import React from 'react';

import mechanic1 from '../../../images/experts/mechanic-1.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Naidu',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic1,
        name: 'Naidu',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic1,
        name: 'Naidu',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic1,
        name: 'Naidu',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic1,
        name: 'Naidu',
        expertize: '-Engine Expert-'
    }
]

const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary mt-5'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;