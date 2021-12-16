import memoizeOne from 'memoize-one';

import {
    fetchResearchers,
} from 'core/api/dataFetchers';

export const getResearchers = memoizeOne(async (query, limit, offset) => {
    const { success, data, error } = await fetchResearchers(query, limit, offset);

    if (success) {
        return {
            hasMore: (limit + offset) < data.count,
            data: data.results.map(({ id, full_name: fullName, avatar, email }) =>
                ({
                    label: fullName || email,
                    value: id,
                    avatar: avatar || 'broken', // workaround for mui avatar fallback issues
                })),
        };
    }

    throw Error(error);
});
