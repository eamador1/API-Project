const itemsCounter = (items) => {
  const shows = document.querySelector('.menu-series');
  shows.innerHTML = `Series <span>(${items})</span>`;
};

export default itemsCounter;