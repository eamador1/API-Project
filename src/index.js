import './style.css';
import populateSeries from './modules/home.js';

const axios = require('axios');

axios.get(`https://api.tvmaze.com/shows`)
  .then(response => {
    const series = response.data;
    populateSeries(series);
  })
  .catch(error => {
    console.error(error);
  });

