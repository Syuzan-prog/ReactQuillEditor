import { postApiRequest, getApiRequest } from './_tools';

import { editor as routes } from './routes';

export const createPage = (tag) => postApiRequest(routes.createPage(), { tag });

export const edit = (tag) => postApiRequest(routes.edit(), { tag });

export const fetchPosts = (limit, offset) =>
    getApiRequest(routes.list(), { query: { limit, offset } });
