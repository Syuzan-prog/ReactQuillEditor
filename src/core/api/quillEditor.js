import {postApiRequest} from './_tools';

import { editor as routes } from './routes';

export const saveDocument = (tag) => postApiRequest(routes.sendDocument(), {tag});