const postLikes = async (id) => {
  const sendData = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ESFmcHLibSbkeopgzEeb/likes/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const result = await sendData.text();
  return result;
};

export default postLikes;