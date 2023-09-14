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

    image.classList.add('series-image');
    contTitle.classList.add('contTitle');
    contButtons.classList.add('contButtons');
    comments.classList.add('comments');
    comments.textContent = 'Comments';
    reservations.classList.add('reservations');
    reservations.textContent = 'Reservations';
    image.src = seriesData.image.original;
    title.textContent = seriesData.name;

    contTitle.appendChild(title);
    contButtons.appendChild(comments);
    contButtons.appendChild(reservations);
    contGeneral.appendChild(image);
    contGeneral.appendChild(contTitle);
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
