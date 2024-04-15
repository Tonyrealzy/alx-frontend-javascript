import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    console.log('body: ', uploadPhoto.body);
    console.log('firstName: ', createUser.firstName);
    console.log('lastName: ', createUser.lastName);
  } catch (error) {
    console.log('Signup system offline');
  }
}

handleProfileSignup();
