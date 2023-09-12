const populateSeries = (series) => {
    const seriesContainer = document.querySelector('.series-container');
    seriesContainer.innerHTML = '';
  
    series.forEach((seriesData) => {
      const image = document.createElement('img');
      const contTitle = document.createElement('div');
      const title = document.createElement('h5');
      /*const contButtons = document.createElement('div');
      const comments = document.createElement('button');
      const reservations = document.createElement('button');*/
      
      image.classList.add('series-image');
      //contTitle = classList.add('contTitle');
      /*contButtons.classList.add('contButtons');*/
      /*comments.classList.add('comments');*/
      /*comments.textContent = 'Comments';*/
      /*reservations.classList.add('reservations');*/
      /*reservations.textContent = 'Reservations';*/
      image.src = seriesData.image.original;
      //title.textContent = seriesData.name;

      //contTitle.appendChild(title);
      //contButtons.appendChild(comments);
      //contButtons.appendChild(reservations);
      seriesContainer.appendChild(image);
      //seriesContainer.appendChild(contTitle);
      //seriesContainer.appendChild(contButtons);
      
    });
  };
  
  export default populateSeries;
  