import { postApiRequest } from './_tools';
import { auth as routes } from './routes';

export const signin = (email, password) => postApiRequest(routes.signin(), { email, password });
export const signup = (body) => postApiRequest(routes.signup(), body);

export const recoverPassword = (email) => postApiRequest(routes.recoverPassword(), { email });
export const resetPassword = (body) => postApiRequest(routes.resetPassword(), body);
export const joinWaitlist = (email) => postApiRequest(routes.join(), { email });

export const verifyEmail = (token) => postApiRequest(routes.verify(token));

export const fetchMeta = (token) => postApiRequest(routes.verification.meta(), { token });
export const requestCode = (token) => postApiRequest(routes.verification.requestCode(), { token });
export const submitCode = (token, code) => postApiRequest(routes.verification.sendCode(), { token, code });
export const createPassword = (token, password) => postApiRequest(routes.resetPassword(), { token, password });
