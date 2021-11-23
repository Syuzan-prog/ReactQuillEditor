import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { reducer as app } from './modules/init.module';
import { reducer as account } from './modules/account';
import { reducer as verification } from './modules/verification';
import { reducer as notifications } from './modules/notifications.module';

import { logout } from './modules/auth.module';

const applicationReducer = combineReducers({
    app,
    account,
    verification,
    notifications,
    form,
});

const rootReducer = (state, action) => {
    if (action.type === logout.getType()) {
        const { app: appReducer, form: formReducer } = state;

        // eslint-disable-next-line no-param-reassign
        state = { app: appReducer, form: formReducer };
    }

    return applicationReducer(state, action);
};

export default rootReducer;
