import { createContext } from 'react';

const UserTypeContext = createContext({
    isAdmin: null,
});

UserTypeContext.displayName = 'UserTypeContext';

export default UserTypeContext;
