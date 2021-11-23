import React from 'react';

import UserTypeContext from './context';

const withUserType = (Component) => (props) => (
    <UserTypeContext.Consumer>
        {({ isAdmin }) => <Component {...props} isAdmin={isAdmin} />}
    </UserTypeContext.Consumer>
);

export default withUserType;
