import './style.css';
import render from './modules/fetch-movies.js';
import logo from './assets/favicon.png';
import renderpopup from './modules/comment.js';
//import { countLikes } from './modules/likes.js';
import getCommentsCount from './modules/comments-counter.js';

document.getElementById('logo-img').setAttribute('src', logo);
await render();

const heartIcons = document.querySelectorAll('.fa-heart');

heartIcons.forEach((icon) => icon.addEventListener('click', (event) => {
  countLikes(event);
  event.target.classList.add('animation-heart');
  // Selects the span element next to the icon.
  const span = event.target.nextElementSibling;
}));

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