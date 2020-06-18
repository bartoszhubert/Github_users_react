import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Star } from '../../../../../icons/star.svg';

import './repositoryItem.css';

function RepositoriyItem({ description, name, stargazers_count }) {
    return (
        <div className='repository-wrapper'>
            <div className='repository-text'>
                <div className='repository-title'>{name}</div>
                <div>{description}</div>
            </div>
            <div className='repository-star'>{stargazers_count}
                <span className='repository-icon'>
                    <Star />
                </span>
            </div>
        </div>
    );
};

RepositoriyItem.propTypes = {
    description: PropTypes.string,
    name: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired
}

RepositoriyItem.defaultProps = {
    description: ''
}

export default RepositoriyItem;