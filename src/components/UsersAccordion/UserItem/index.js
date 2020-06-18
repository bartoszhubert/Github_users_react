import React from 'react';

import RepositoriesList from './RepositoriesList';

import './userItem.css';

function UserItem({ isActive, login, onClick }) {

    return (
        <>
            <div className='userItem' onClick={onClick}>
                {login}
            </div>
            {isActive && <RepositoriesList />}
        </>
    )
};

export default UserItem;