import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    const navigate = useNavigate();
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    const url = `/friend/${id}`;
    const handleFriendClick = () => {
        navigate(url);
    }
    return (
        <div style={friendStyle}>
            <h3>I am: {name} {id}</h3>
            <h5>Call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p><small>I live in: {address.city}</small></p>
            <Link to={url}>Visit me</Link>
            <br />
            <Link to={url}>
                <button>Visit me 1</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me 2</button>
        </div>
    );
};

export default Friend;