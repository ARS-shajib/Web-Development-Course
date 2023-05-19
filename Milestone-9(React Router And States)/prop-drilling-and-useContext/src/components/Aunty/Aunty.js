import React from 'react';

const Aunty = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>Aunty</h2>
            <small>House: {house}</small>
        </div>
    );
};

export default Aunty;