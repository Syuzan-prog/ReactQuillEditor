import memoizeOne from 'memoize-one';

import {
    fetchCategories,
} from 'core/api/dataFetchers';

export const getCategories = memoizeOne(async (query, limit, offset) => {
    const { success, data, error } = await fetchCategories(query, limit, offset);

    if (success) {
        return {
            hasMore: (limit + offset) < data.count,
            data: data.results.map((category) => ({ label: category, value: category })),
        };
    }

    throw Error(error);
});
