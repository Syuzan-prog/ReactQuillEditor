import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getIsAdmin } from 'state/selectors/account.selectors';

import UserTypeContext from './context';

const UserTypeProvider = ({ children }) => {
    const defaultContextValues = useContext(UserTypeContext);
    const isAdmin = useSelector(getIsAdmin);

    return (
        <UserTypeContext.Provider value={{ ...defaultContextValues, isAdmin }}>
            {children}
        </UserTypeContext.Provider>
    );
};

UserTypeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserTypeProvider;
