import React from 'react';
// import { Switch, Route} from 'react-router-dom';
// import { routes } from 'configs/app.routes';
// import Registration from 'components/app/Auth/Registration';

import styles from './LandingContainer.scss';

const LandingContainer = () => {
    return (
        <div className={styles.blockContainer}>
            <div className={styles.container}>
                {/* <Switch>
                    <Route exact path={routes.registration} component={Registration} />
                </Switch> */}
            </div>
        </div>
    );
};

export default LandingContainer;
