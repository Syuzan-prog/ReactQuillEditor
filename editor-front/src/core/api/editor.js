import { postApiRequest, getApiRequest, putApiRequest, deleteApiRequest, } from './_tools';

import { editor as routes } from './routes';

export const saveDocument = (tag) => postApiRequest(routes.save(), tag);

export const fetchPost = (id) => getApiRequest(routes.one(id));

export const fetchPosts = (limit, offset) =>
    getApiRequest(routes.list(), { query: { limit, offset } });

export const editDocument = (id, body) => putApiRequest(routes.update(id), { editor: body.update_post , id});

export const deleteDocument = (id, deleteReferences) =>
    deleteApiRequest(routes.delite(id), { query: { deleteReferences, force: true } });


