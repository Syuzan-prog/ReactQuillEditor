import { connect } from 'react-redux';

import { logout } from 'state/modules/auth.module';

import NavList from './NavList';

const mapDispatchToProps = {
    logout,
};

export default connect(null , mapDispatchToProps)(NavList);
