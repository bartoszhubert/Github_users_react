import githubApi from '../services/githubApi';

export const actionTypes = {
    FETCH_REPOSITORIES_REQUEST: 'FETCH_REPOSITORIES_REQUEST',
    FETCH_REPOSITORIES_SUCCESS: 'FETCH_REPOSITORIES_SUCCESS',
    FETCH_REPOSITORIES_FAILURE: 'FETCH_REPOSITORIES_FAILURE',
    FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
    FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
    FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE'
};

const action = (type, payload) => ({ type, payload });

export const fetchUsers = (payload = {}) => dispatch => {
    const { query } = payload;

    dispatch(action(actionTypes.FETCH_USERS_REQUEST));

    return githubApi
        .getUsers(query)
        .then(users => {
            dispatch(
                action(actionTypes.FETCH_USERS_SUCCESS, { users })
            );
        })
        .catch(error =>
            dispatch(action(actionTypes.FETCH_USERS_FAILURE, { error }))
        );
};

export const fetchRepositories = (payload = {}) => dispatch => {
    const { user } = payload;

    dispatch(action(actionTypes.FETCH_REPOSITORIES_REQUEST));

    return githubApi
        .getRepositoriesByUser(user)
        .then(repositories =>
            dispatch(action(actionTypes.FETCH_REPOSITORIES_SUCCESS, { repositories }))
        )
        .catch(error =>
            dispatch(action(actionTypes.FETCH_REPOSITORIES_FAILURE, { error }))
        );
}
