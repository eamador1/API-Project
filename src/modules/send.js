const sendData = async (data) => {
  const dataToSend = JSON.stringify(data);
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ESFmcHLibSbkeopgzEeb/comments';
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: dataToSend,
  });
};

export default sendData;