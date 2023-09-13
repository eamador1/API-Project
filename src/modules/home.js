import { updateLikes } from './fetchLikes.js';

const populateSeries = (series) => {
  const seriesContainer = document.querySelector('.series-container');
  seriesContainer.innerHTML = '';

  series.forEach((seriesData) => {
    const contGeneral = document.createElement('div');
    const image = document.createElement('img');
    const contTitle = document.createElement('div');
    const title = document.createElement('h5');
    const contButtons = document.createElement('div');
    const comments = document.createElement('button');
    const reservations = document.createElement('button');
    const displayLikes = document.createElement('span');

    image.classList.add('series-image');
    contTitle.classList.add('contTitle');
    contButtons.classList.add('contButtons');
    comments.classList.add('comments');
    displayLikes.classList.add('displayLikes');
    comments.textContent = 'Comments';
    reservations.classList.add('reservations');
    reservations.textContent = 'Reservations';
    image.src = seriesData.image.original;
    title.textContent = seriesData.name;

    displayLikes.id = `likes-${seriesData.id}`;
    updateLikes(seriesData.id, displayLikes);

    contTitle.appendChild(title);
    contButtons.appendChild(comments);
    contButtons.appendChild(reservations);
    contGeneral.appendChild(image);
    contGeneral.appendChild(contTitle);
    contGeneral.appendChild(displayLikes);
    contGeneral.appendChild(contButtons);
    seriesContainer.appendChild(contGeneral);
  });
};

export default populateSeries;
