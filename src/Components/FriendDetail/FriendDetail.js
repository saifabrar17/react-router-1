import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    const {friendId} = useParams();

    const [friend, setFriend] = useState([]);

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])


    return (
        <div>
            <h2>This is details of bondhu: {friendId}</h2>
            <h4>{friend.name}</h4>
            <h3>{friend.address?.street}</h3>
           
        </div>
    );
};

export default FriendDetail;