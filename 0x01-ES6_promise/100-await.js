import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser(firstName, lastName, fileName) {
  const [
    responseFromUploadPhotoFunction,
    responseFromCreateUserFunction] = await Promise.all([
    uploadPhoto(fileName),
    createUser(firstName, lastName)]);

  try {
    return {
      photo: responseFromUploadPhotoFunction,
      user: responseFromCreateUserFunction,
    };
  } catch (error) {
    return {};
  }
}
module.exports = asyncUploadUser();
