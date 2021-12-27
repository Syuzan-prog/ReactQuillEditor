export const auth = {
    signin: () => `http://localhost:5000/api/auth/login`,
    signup: () => `${APP_API_URL}/auth/signup/`,
    recoverPassword: () => `${APP_API_URL}/auth/recover_password/`,
    resetPassword: () => `${APP_API_URL}/auth/reset_password/`,
    join: () => `${APP_API_URL}/join_waitlist/`,
    verify: (token) => `http://localhost:5000/api/auth/${token}`,
    verification: {
        meta: () => `http://localhost:5000/api/auth/auth`,
        requestCode: () => `${APP_API_URL}/auth/send_code/`,
        sendCode: () => `${APP_API_URL}/auth/verify_email/`,
    },
};

export const account = {
    me: () => `http://localhost:5000/api/auth/auth`,
    changePassword: () => `${APP_API_URL}/users/me/change_password/`,
    changeRecoveryEmail: () => `${APP_API_URL}/users/me/set_recovery_email/`,
    verifyRecoveryEmail: () => `${APP_API_URL}/users/me/verify_recovery_email/`,
    publications: () => `${APP_API_URL}/users/me/update_publications/`,
};

export const dataFetchers = {
    categories: () => `${APP_API_URL}/category/all`,
    sponsors: () => `${APP_API_URL}/sponsor/all/`,
    researchers: () => `${APP_API_URL}/researchers_by_institution/`,
};

export const editor = {
    save: () => `http://localhost:5000/api/posts`,
    list: () => `http://localhost:5000/api/posts/posts`,
    one: (id) => `http://localhost:5000/api/posts/post/${id}`,
    update: (id) => `http://localhost:5000/api/posts/update/${id}`,
    delite: (id) => `${APP_API_URL}/datasources/${id}`,
};