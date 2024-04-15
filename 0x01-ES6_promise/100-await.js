import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [
      responseFromUploadPhotoFunction,
      responseFromCreateUserFunction] = await Promise.all([
      uploadPhoto(),
      createUser()]);

    return {
      photo: responseFromUploadPhotoFunction,
      user: responseFromCreateUserFunction,
    };
  } catch (error) {
    console.log('Signup error: ', error);
    return {};
  }
}

// const testFunction = async () => {
//   const valuedResponse = await asyncUploadUser();
//   console.log(valuedResponse);
// };

// testFunction();