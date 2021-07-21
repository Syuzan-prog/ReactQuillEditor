import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'configs/app.routes';

import QuillEditor from 'components/app/QuillEditor';
import CreatePage from 'components/app/CreatePage';

import styles from './AppContainer.scss';


const AppContainer = () => (
    <div className={styles.blockContainer}>
        <div className={styles.container}>
                <Switch>
                    <Route exact path={routes._app.quillEditor} component={QuillEditor} />
                    <Route exact path={routes._app.createPage} component={CreatePage} />
                    <Redirect from={routes.app} to={routes._app} />
                </Switch>
        </div>
    </div>
);

export default AppContainer;
