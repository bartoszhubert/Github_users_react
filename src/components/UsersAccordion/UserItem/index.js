import React from 'react';

import { ReactComponent as ArrowDown } from '../../../icons/arrow_down.svg';
import { ReactComponent as ArrowUp } from '../../../icons/arrow_up.svg';
import RepositoriesList from './RepositoriesList';

import './userItem.css';

function UserItem({ isActive, login, onClick, repositories }) {

    return (
        <>
            <div className='user-item' onClick={onClick}>
                <div>
                    {login}
                </div>
                {isActive ? <ArrowUp /> : <ArrowDown />}
            </div>
            {isActive && <RepositoriesList repositories={repositories} />}
        </>
    )
};

export default UserItem;