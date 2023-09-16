import './style.css';
import render from './modules/fetch-movies.js';
import logo from './assets/favicon.png';

document.getElementById('logo-img').setAttribute('src', logo);
await render();