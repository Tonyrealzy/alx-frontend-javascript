export default function handleResponseFromAPI(promise) {
  return promise
    .then((resolve) => {
      console.log('Got a response from the API');
      resolve({ status: 200, body: 'success' });
    })
    .catch((reject) => {
      console.log('Got an error from the API');
      reject({});
    });
}
