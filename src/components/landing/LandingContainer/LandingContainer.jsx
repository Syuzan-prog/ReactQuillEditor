import React from 'react';
import {
    Switch, Route,
} from 'react-router-dom';

import { routes } from 'configs/app.routes';

import SignIn from 'components/landing/SignIn';
// import SignUp from 'components/landing/SignUp';
// import SignUpSuccess from 'components/landing/SignUpSuccess';
import RecoverPassword from 'components/landing/RecoverPassword';
import RecoverSuccess from 'components/landing/RecoverSuccess';
import ResetPassword from 'components/landing/ResetPassword';
import ResetSuccess from 'components/landing/ResetSuccess';
import JoinWaitlist from 'components/landing/JoinWaitlist';
import JoinWaitlistSuccess from 'components/landing/JoinWaitlistSuccess';
import VerificationContainer from 'components/landing/VerificationContainer';

import Logo from 'resources/assets/svg/logo.svg';

import styles from './LandingContainer.scss';

const LandingContainer = () => (
    <div className={styles.container}>
        <Switch>
            <Route path={routes.verify} component={VerificationContainer} />
            <Route exact path={routes.signin} component={SignIn} />
            {/* <Route exact path={routes.signup} component={SignUp} />
            <Route exact path={routes.signupSuccess} component={SignUpSuccess} /> */}
            <Route exact path={routes.recoverPassword} component={RecoverPassword} />
            <Route exact path={routes.recoverSuccess} component={RecoverSuccess} />
            <Route exact path={routes.resetPassword} component={ResetPassword} />
            <Route exact path={routes.resetSuccess} component={ResetSuccess} />
            <Route exact path={routes.join} component={JoinWaitlist} />
            <Route exact path={routes.joinSuccess} component={JoinWaitlistSuccess} />
        </Switch>
    </div>
);

export default LandingContainer;
