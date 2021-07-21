const TOKEN_STORAGE_KEY = 'exp';

export const setToken = (token, persistToken = false) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
};

export const setUserToken = (token) => {
    removeToken();
    setToken(token);
};

export const getToken = () => localStorage.getItem(TOKEN_STORAGE_KEY);
