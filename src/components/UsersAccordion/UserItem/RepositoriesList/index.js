import React from 'react';

import RepositoriyItem from './RepositoryItem';

import './repositoriesList.css';

function RepositoriesList({ repositories }) {

    const renderRepositoriesList = () =>
        repositories.map(({ description, name, stargazers_count }, index) =>
            <RepositoriyItem key={index} name={name} description={description} stargazers_count={stargazers_count} />);

    if (!repositories) return null;
    if (repositories.length === 0) return <div style={{ textAlign: 'center' }}>No repositories!</div>;

    return (
        <div className='repositories-wrapper'>{renderRepositoriesList()}</div>
    )
}

export default RepositoriesList;