import omitBy from 'lodash-es/omitBy';
import isEmpty from 'lodash-es/isEmpty';

/* eslint-disable no-param-reassign */
export default function removeFalsyKeys(object) {
    return omitBy(object, (value) => {
        if (typeof value === 'object' && !Array.isArray(value)) value = removeFalsyKeys(value);

        if (typeof value === 'object') return isEmpty(value);

        return !value;
    });
}
/* eslint-enable no-param-reassign */
