import { postApiRequest, getApiRequest } from './_tools';

import { editor as routes } from './routes';

export const saveDocument = (tag) => postApiRequest(routes.saveDocument(), tag);

export const edit = (tag) => postApiRequest(routes.edit(), { tag });

export const fetchPosts = (limit, offset) =>
    getApiRequest(routes.list(), { query: { limit, offset } });
