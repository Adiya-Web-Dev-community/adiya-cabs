import axios from 'axios';

// Use the environment variable defined in the .env file
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_DOMAIN, // Use your specific variable name
});

export default axiosInstance;
