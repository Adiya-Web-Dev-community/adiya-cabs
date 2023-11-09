import axios from 'axios';

// Use the environment variable defined in the .env file
const axiosInstance = axios.create({
  baseURL: 'https://meru-cab-server.onrender.com', // Use your specific variable name
});

export default axiosInstance;
