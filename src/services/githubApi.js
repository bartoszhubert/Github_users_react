import ApiService from './Api';

const BASE_URL = 'https://api.github.com';
const client = new ApiService({ baseURL: BASE_URL });

const githubApi = {};

githubApi.getUsers = query => client.get(`/search/users?q=${query}&per_page=5`);
githubApi.getRepositoriesByUser = user => client.get(`/users/${user}/repos?per_page=3`);

export default githubApi;