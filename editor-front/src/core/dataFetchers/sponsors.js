import memoizeOne from 'memoize-one';

import {
    fetchSponsors,
} from 'core/api/dataFetchers';

export const getSponsors = memoizeOne(async (query, limit, offset) => {
    const { success, data, error } = await fetchSponsors(query, limit, offset);

    if (success) {
        return {
            hasMore: (limit + offset) < data.count,
            data: data.results.map((value) => ({ value, label: value })),
        };
    }

    throw Error(error);
});
