import React, { Suspense, lazy } from 'react';

import { Router, Switch, Route } from 'react-router-dom';

import appHistory from 'configs/app.history';
import { routes } from 'configs/app.routes';

const LandingContainer = lazy(() => import(
    /* webpackChunkName: "landing" */
    /* webpackMode: "lazy" */
    'components/app/LandingContainer'
));
const AppContainer = lazy(() => import(
    /* webpackChunkName: "app" */
    /* webpackMode: "lazy" */
    'components/app/AppContainer'
));
const Root = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <Router history={appHistory}>
                <Switch>
                    <Route path={routes.app} component={AppContainer} />
                    <Route path={routes.landing} component={LandingContainer} />
                </Switch>
            </Router>
     </Suspense>
    );
};

export default Root;
