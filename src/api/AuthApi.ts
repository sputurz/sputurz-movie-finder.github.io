import { LoginUser, User } from '../models';
import { makeRequest } from './config';

export const loginUser = (payload: LoginUser): Promise<void> => {
  return makeRequest<void>('/auth/login', {
    method: 'POST',
    data: payload,
  });
};

export const logoutUser = (): Promise<void> => makeRequest('/auth/logout');

export const getProfile = (): Promise<User> => makeRequest('/profile');
