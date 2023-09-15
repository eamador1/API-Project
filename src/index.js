import './style.css';
import populateSeries from './modules/home.js';
import itemsCounter from './modules/seriesCounter.js';

const axios = require('axios');

axios.get('https://api.tvmaze.com/shows')
  .then((response) => {
    const series = response.data;
    const totalShows = response.data.length;
    populateSeries(series);
    itemsCounter(totalShows);
  })
  .catch((error) => {
    console.error(error);
  });
