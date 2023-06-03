import React from 'react';

import mechanic1 from '../../../images/experts/mechanic-1.jpg';
import mechanic2 from '../../../images/services/2.svg';
import mechanic3 from '../../../images/services/8.jpg';
import mechanic4 from '../../../images/services/4.svg';
import mechanic5 from '../../../images/services/5.svg';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Naidu',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'Dhoni',
        expertize: '-color change-'
    },
    {
        img: mechanic3,
        name: 'shewag',
        expertize: '-full wash-'
    },
    {
        img: mechanic4,
        name: 'John king',
        expertize: '-glass change-'
    },
    {
        img: mechanic5,
        name: 'Ambati',
        expertize: '-tire repair-'
    }
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
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