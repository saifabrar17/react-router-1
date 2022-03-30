import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {

    const {name, username, id} =props.friend;
    

    const navigate = useNavigate();

    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }

    return (
        <div>
            <h4>Name: {name}</h4>
            <button onClick={showFriendDetail}>{username} Id {id}</button>
        </div>
    );
};

export default Friend;