import { createUser } from './utils';

export default async function signUpUser(firstName, lastName) {
  const user = await createUser(firstName, lastName);
  return ({
    firstName: user.firstName,
    lastName: user.lastName,
  });
}
