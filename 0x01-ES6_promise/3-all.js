import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
  .then(([photoResponse, userResponse]) => {
    console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
  })
  .catch(error => {
    console.log('Signup system offline');
  });
}

handleProfileSignup();
