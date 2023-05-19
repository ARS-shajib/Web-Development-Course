import React from 'react';
import Special from '../Special/Special';

const Myself = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>Myself</h2>
            <small>house: {house}</small>
            <Special></Special>
        </div>
    );
};

export default Myself;