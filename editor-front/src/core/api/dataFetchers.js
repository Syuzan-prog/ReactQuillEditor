import { getApiRequest } from './_tools';

import { dataFetchers as routes } from './routes';

export const fetchCategories = (query, limit, offset) =>
    getApiRequest(routes.categories(), { query: { query, limit, offset } });

export const fetchSponsors = (query, limit, offset) =>
    getApiRequest(routes.sponsors(), { query: { query, limit, offset } });

export const fetchResearchers = (query, limit, offset) =>
    getApiRequest(routes.researchers(), { query: { query, limit, offset } });
