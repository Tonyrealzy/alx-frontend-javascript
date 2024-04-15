import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
  .then(results => {
    const [userResponse, photoResponse] = results;
    return [
      { status: 'fulfilled', value: userResponse },
      { status: 'fulfilled', value: photoResponse },
    ];
  })
  .catch (error => {
    console.log('Signup error: ', error);
    return [
      { status: 'rejected', value: error },
    ];
  });
}
