import { connect } from 'react-redux';

import { closeNotification, removeNotification } from 'state/modules/notifications.module';

import NotificationController from './NotificationController';

const mapStateToProps = (state) => ({
    notifications: state.notifications.notifications,
});

const mapDispatchToProps = {
    closeNotification,
    removeNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationController);
