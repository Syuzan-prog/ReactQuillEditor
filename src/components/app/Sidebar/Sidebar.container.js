import { connect } from 'react-redux';

import { accountUpdate } from 'state/modules/account';
import { getAvatarUrl, getFullName } from 'state/selectors/account.selectors';
import { ACCOUNT_AVATAR_FIELD_NAME } from 'constants/settings.constants';

import Sidebar from './Sidebar';

const mapStateToProps = (state) => ({
    avatarUrl: getAvatarUrl(state),
    fullName: getFullName(state),
});

const mapDispatchToProps = (dispatch) => ({
    uploadAvatar: (dataUrl) => dispatch(accountUpdate({ [ACCOUNT_AVATAR_FIELD_NAME]: dataUrl })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
