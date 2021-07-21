export const getColumnKeysFromData = (data, keysToIgnore) => {
    const columnKeys = Object.keys(data);
    return columnKeys.filter((key) => !keysToIgnore.includes(key));
};
