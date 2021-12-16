import { getApiRequest, postApiRequest } from './_tools';
import { account } from './routes';

export const fetch = (auth) => getApiRequest(account.me(), auth);
export const changePassword = (body) => postApiRequest(account.changePassword(), body);
export const changeRecoveryEmail = (body) => postApiRequest(account.changeRecoveryEmail(), body);
export const verifyRecoveryEmail = (token) => postApiRequest(account.verifyRecoveryEmail(), { token });
export const modifyAssociations = (body) => postApiRequest(account.publications(), body);
