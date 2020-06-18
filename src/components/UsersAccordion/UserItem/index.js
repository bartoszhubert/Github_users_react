import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ArrowDown } from '../../../icons/arrow_down.svg';
import { ReactComponent as ArrowUp } from '../../../icons/arrow_up.svg';
import RepositoriesList from './RepositoriesList';

import './userItem.css';

function UserItem({ isActive, isFetchingRepositories, login, onClick, repositories }) {

    return (
        <>
            <div className='user-item' onClick={onClick}>
                <div>
                    {login}
                </div>
                {isActive ? <ArrowUp /> : <ArrowDown />}
            </div>
            {isActive && <RepositoriesList repositories={repositories} isFetchingRepositories={isFetchingRepositories} />}
        </>
    );
};

UserItem.propTypes = {
    isActive: PropTypes.bool.isRequired,
    isFetchingRepositories: PropTypes.bool.isRequired,
    login: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    repositories: PropTypes.array
}

UserItem.defaultProps = {
    onClick: () => { },
    repositories: []
}

export default UserItem;