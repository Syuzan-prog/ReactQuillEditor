import { createAction, createReducer } from 'redux-act';

const namespace = 'notifications';

export const enqueueNotification = createAction(
    `${namespace} | enqueue`,
    (notification) => ({ ...notification, key: new Date().getTime() + Math.random() })
);

export const closeNotification = createAction(
    `${namespace} | close`,
    (key) => key
);

export const removeNotification = createAction(
    `${namespace} | remove`,
    (key) => key
);

const initialState = {
    notifications: [],
};

export const reducer = createReducer({
    [enqueueNotification.getType()]: (state, notification) => ({
        ...state,
        notifications: [
            ...state.notifications,
            notification,
        ],
    }),
    [closeNotification.getType()]: (state, key) => ({
        ...state,
        notifications: state.notifications.map(
            (notification) => (notification.key === key
                ? { ...notification, dismissed: true }
                : { ...notification })
        ),
    }),
    [removeNotification.getType()]: (state, key) => ({
        ...state,
        notifications: state.notifications.filter((notification) => notification.key !== key),
    }),
}, initialState);
