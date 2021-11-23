import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import appHistory from 'configs/app.history';
import { routes } from 'configs/app.routes';
import katex from 'katex';

window.katex = katex;

import Loader, { LoaderContainer } from 'components/common/Loader';

const LandingContainer = lazy(() => import(
    /* webpackChunkName: "landing" */
    /* webpackMode: "lazy" */
    './landing/LandingContainer'
));

const AppContainer = lazy(() => import(
    /* webpackChunkName: "app" */
    /* webpackMode: "lazy" */
    './app/AppContainer'
));

const Root = () => {
    const isReady = useSelector((state) => state.app.isReady);

    return (
        <LoaderContainer isLoading={!isReady} className="page-loader">
            <Suspense fallback={<Loader className="page-loader" />}>
                <Router history={appHistory}>
                    <Switch>
                        <Route path={routes.app} component={AppContainer} />
                        <Route path={routes.landing} component={LandingContainer} />
                    </Switch>
                </Router>
            </Suspense>
        </LoaderContainer>
    );
};

export default Root;
