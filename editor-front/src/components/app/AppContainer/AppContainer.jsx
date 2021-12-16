import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { SnackbarProvider } from 'notistack';

import Sidebar from 'components/app/Sidebar';
import DashboardPage from 'components/app/DashboardPage';
import { ModalProvider, ModalController } from 'components/app/Modals';
import { UserTypeProvider } from 'components/app/UserTypeContext';
import NotificationController from 'components/app/NotificationController';

import { routes } from 'configs/app.routes';

import Edit from '../HomePage/Edit';
import HomePage from '../HomePage';

import styles from './AppContainer.scss';

const AppContainer = () => (
    <div className={styles.container}>
        <SnackbarProvider maxSnack={3}>
            <UserTypeProvider>
                <ModalProvider>
                    <Sidebar />
                    <div className={styles.pageContainer}>
                        <Switch>
                            <Route path={routes._app.dashboard} component={DashboardPage} />
                            <Route path={routes._app.homePage} component={HomePage} />
                            <Route path={routes._app.edit} component={Edit} />
                            <Redirect exact from={routes.app} to={routes._app.dashboard} />
                        </Switch>
                    </div>
                    <ModalController />
                </ModalProvider>
            </UserTypeProvider>
            <NotificationController />
        </SnackbarProvider>
    </div>
);

export default AppContainer;
