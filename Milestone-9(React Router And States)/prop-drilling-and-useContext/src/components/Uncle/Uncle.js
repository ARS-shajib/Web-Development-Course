import React from 'react';

const Uncle = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>Uncle</h2>
            <small>House: {house}</small>
        </div>
    );
};

export default Uncle; 