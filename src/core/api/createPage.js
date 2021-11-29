import { postApiRequest } from './_tools';

import { editor as routes } from './routes';

export const createPage = (tag) => postApiRequest(routes.createPage(), { tag });
