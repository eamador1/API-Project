import postLikes from './addLikes.js';
import { updateLikes } from './fetchLikes.js';

const axios = require('axios');

const seriesContainer = document.querySelector('.series-container');

const populateSeries = (series) => {
  seriesContainer.innerHTML = '';

  series.forEach((seriesData) => {
    const contGeneral = document.createElement('div');
    const image = document.createElement('img');
    const contTitle = document.createElement('div');
    const title = document.createElement('h5');
    const contButtons = document.createElement('div');
    const comments = document.createElement('button');
    const reservations = document.createElement('button');
    const likeButton = document.createElement('button');
    const displayLikes = document.createElement('span');

    image.classList.add('series-image');
    contTitle.classList.add('contTitle');
    contButtons.classList.add('contButtons');
    comments.classList.add('comments');
    likeButton.classList.add('likeButton');
    displayLikes.classList.add('displayLikes');
    comments.textContent = 'Comments';
    reservations.classList.add('reservations');
    reservations.textContent = 'Reservations';
    image.src = seriesData.image.original;
    title.textContent = seriesData.name;
    likeButton.innerHTML = '&#9825;';
    likeButton.setAttribute('data-series-data', JSON.stringify(seriesData));

    displayLikes.id = `likes-${seriesData.id}`;
    updateLikes(seriesData.id, displayLikes);

    contTitle.appendChild(title);
    contButtons.appendChild(comments);
    contButtons.appendChild(reservations);
    contGeneral.appendChild(image);
    contGeneral.appendChild(contTitle);
    contGeneral.appendChild(likeButton);
    contGeneral.appendChild(displayLikes);
    contGeneral.appendChild(contButtons);
    seriesContainer.appendChild(contGeneral);

    // Comment pop up Modal
    const overlay = document.createElement('div');
    const modalcomment = document.createElement('div');
    modalcomment.style.visibility = 'hidden';

    const titlepopup = document.createElement('h1');
    titlepopup.textContent = seriesData.name;

    const popupimg = document.createElement('img');
    popupimg.src = seriesData.image.original;

    const description = document.createElement('p');
    description.innerHTML = seriesData.summary;

    const closepopup = document.createElement('img');

    const titleComments = document.createElement('h2');
    titleComments.textContent = 'Comments(2)';

    const firstPerson = document.createElement('p');
    firstPerson.textContent = '3/11/2023 Carlos: "I`d love to buy it!"';

    const secondPerson = document.createElement('p');
    secondPerson.textContent = '3/11/2023 Juan: "I would like to see this movie soon"';

    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.value = 'Name';

    const textarea = document.createElement('textarea');
    textarea.textContent = 'Your Insights';

    // Add Class
    modalcomment.classList.add('modal');
    titlepopup.classList.add('titlepopup');
    popupimg.classList.add('popupimg');
    description.classList.add('popupdescrip');
    closepopup.classList.add('closepopup');
    titleComments.classList.add('titleComment');
    firstPerson.classList.add('firstPerson');
    secondPerson.classList.add('secondPerson');
    inputName.classList.add('inputName');
    textarea.classList.add('textarea');
    overlay.classList.add('overlay');

    // Click event
    comments.addEventListener('click', () => {
      closepopup.src = 'assets/cross.png';
      closepopup.style.cursor = 'pointer';

      modalcomment.appendChild(closepopup);
      modalcomment.appendChild(titlepopup);
      modalcomment.appendChild(popupimg);
      modalcomment.appendChild(description);
      modalcomment.appendChild(titleComments);
      modalcomment.appendChild(firstPerson);
      modalcomment.appendChild(secondPerson);
      modalcomment.appendChild(inputName);
      modalcomment.appendChild(textarea);
      contGeneral.appendChild(modalcomment);
      seriesContainer.appendChild(overlay);
      modalcomment.style.visibility = 'visible';
    });

    closepopup.addEventListener('click', () => {
      modalcomment.style.display = 'none';
      overlay.style.display = 'none';
    });
  });
};

export default populateSeries;

/* seriesContainer.addEventListener('click', async (event) => {
    if (event.target.classList.contains('likeButton')) {
        const seriesData = event.target.dataset.seriesData;
        await postLikes(seriesData.id);
        const showLikes = seriesContainer.querySelector('.displayLikes');
      await updateLikes(seriesData.id, showLikes);
      console.log(updateLikes);
    }
  }) */

seriesContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('likeButton')) {
    const seriesDataString = event.target.getAttribute('data-series-data');
    const seriesData = JSON.parse(seriesDataString);
    const showLikes = event.target.nextElementSibling;
    await postLikes(seriesData.id);
    await updateLikes(seriesData.id, showLikes);
  }
});
// Elements
const openPopupButton = document.getElementById('open-popup');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');
const reservationNameInput = document.getElementById('reservation-name');
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const reserveButton = document.getElementById('reserve-button');

// Function to open the popup
openPopupButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Function to close the popup
closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Function to handle the "Reserve" button click
reserveButton.addEventListener('click', async () => {
  const name = reservationNameInput.value;
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;

  // Example reservation data
  const reservationData = {
    item_id: 'item1', 
    username: name, 
    date_start: startDate, 
    date_end: endDate, 
  };
  try {
    // Make a POST request to record the reservation data in the Involvement API
    const response = await axios.post(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ESFmcHLibSbkeopgzEeb/',
      reservationData, 
    );

    if (response.status === 201) {
      // Reservation created successfully
      console.log('Reservation created successfully');
    } else {
      // Handle other response statuses here
      console.error('Failed to create reservation');
    }

    // Close the popup after making the reservation
    popup.style.display = 'none';
  } catch (error) {
    console.error('An error occurred:', error);
  }
});

