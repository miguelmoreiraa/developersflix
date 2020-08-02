const URL_CONFIG = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : 'https://developersflix.herokuapp.com';

export default {
    URL_CONFIG,
}