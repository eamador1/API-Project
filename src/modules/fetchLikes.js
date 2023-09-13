export const getLikes = async () => {
  const requestURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ESFmcHLibSbkeopgzEeb/likes';
  const request = new Request(requestURL);

  const responseLikes = await fetch(request);
  const infoLikes = await responseLikes.json();
  return infoLikes;
};

export const updateLikes = async (id, span) => {
  const numberOfLikes = await getLikes();
  let likes = 0;
  numberOfLikes.forEach((elem) => {
    if (elem.item_id === id) {
      likes = elem.likes;
    }
  });
  span.textContent = `${likes} likes`;
};
