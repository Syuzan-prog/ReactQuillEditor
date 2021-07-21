import { routes } from 'configs/app.routes';

export const isLandingPath = (route) => [
    routes.landing,
].some((path) => path === route);
