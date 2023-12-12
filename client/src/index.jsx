import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/custom.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'dotenv/config';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // {/* </React.StrictMode>, */}
)
