import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [user, error] = await Promise.all([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    return [
      { status: 'resolved', value: user },
      { status: 'rejected', value: error },
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: `${fileName} cannot be processed!` },
    ];
  }
}
