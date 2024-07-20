import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
