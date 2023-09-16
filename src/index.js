import './style.css';
import render from './modules/fetch-movies.js';
import renderpopup from './modules/comment.js';
import logo from './assets/favicon.png';
import getCommentsCount from './modules/comments-counter.js';

document.getElementById('logo-img').setAttribute('src', logo);
await render();

// < Comment popup start
const commentBtns = document.querySelectorAll('.comment-btn');

// Add event to comment button
commentBtns.forEach((btn) => {
  btn.addEventListener('click', async () => {
    const { id } = btn.parentElement.parentElement;
    await renderpopup(id);

    const commentsCountCon = document.querySelector('.commentsCount');

    commentsCountCon.textContent = `(${getCommentsCount()})`;
  });
});