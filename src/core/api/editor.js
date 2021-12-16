import { postApiRequest, getApiRequest, putApiRequest } from './_tools';

import { editor as routes } from './routes';

export const saveDocument = (tag) => postApiRequest(routes.saveDocument(), tag);

export const fetchPost = (id) => getApiRequest(routes.one(id));

export const fetchPosts = (limit, offset) =>
    getApiRequest(routes.list(), { query: { limit, offset } });

export const editDocument = (id, body) => putApiRequest(routes.update(id), body);


