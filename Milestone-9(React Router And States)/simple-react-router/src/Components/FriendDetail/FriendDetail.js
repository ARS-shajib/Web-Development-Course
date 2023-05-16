import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);
    const handleClick = () => {
        navigate(`/friends`);
    }
    return (
        <div>
            <h3>Detail coming soon : {friendId}</h3>
            <h5>Name: {friend.name}</h5>
            <h5>Phone: {friend.phone}</h5>
            <h5>Company: {friend.company?.name}</h5>
            <button onClick={handleClick}>See All Friends</button>
        </div>
    );
};

export default FriendDetail;