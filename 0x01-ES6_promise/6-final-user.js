import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const { userResponse, photoResponse } = await Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
    return [
      { status: 'fulfilled', value: { userResponse, photoResponse } },
    ];
  }
  catch (error) {
    console.log('Signup error: ', error);
    return [
      { status: 'rejected', value: error },
    ];
  };
}
