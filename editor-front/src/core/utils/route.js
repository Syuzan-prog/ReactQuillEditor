import { routes } from 'configs/app.routes';

export const isLandingPath = (route) => [
    routes.signin,
    routes.signup,
    routes.recoverPassword,
    routes.recoverSuccess,
    routes.resetPassword,
    routes.resetSuccess,
    routes.verify,
    routes.join,
    routes.joinSuccess,
].some((path) => path === route);
