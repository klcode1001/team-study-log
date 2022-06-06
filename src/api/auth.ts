import api from './instance';

interface UserInterface {
  id: number;
  username: string;
  password: string;
  token: string;
}

export type UserResponse = Pick<UserInterface, 'id' | 'username' | 'token'>;
export type User = Pick<UserInterface, 'id' | 'username'>;
export type UserSigninFormType = Pick<UserInterface, 'username' | 'password'>;

export async function signup(username: string, password: string) {
  try {
    const response = await api.post<UserResponse>('/auth/signup', {
      username,
      password,
    });
    return response.data;
  } catch {
    // TODO: after receive status code from the server, pass error type
    throw new Error('error occurred at signup.');
  }
}

export async function signin(username: string, password: string) {
  try {
    const response = await api.post<UserResponse>('/auth/signin', {
      username,
      password,
    });
    return response.data;
  } catch {
    // TODO: after receive status code from the server, pass error type
    throw new Error('error occurred at signin.');
  }
}
