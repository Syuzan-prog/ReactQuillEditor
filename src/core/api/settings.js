import { postApiRequest } from './_tools';
import { account as routes } from './routes';

export const accountUpdate = (id, body) =>
    postApiRequest(routes.me(id), body);

export const changePassword = (password) => postApiRequest(routes.changePassword(), { password });
