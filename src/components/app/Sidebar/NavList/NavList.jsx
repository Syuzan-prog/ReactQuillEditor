import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import WebIcon from '@mui/icons-material/WebOutlined';
import SaveIcon from '@mui/icons-material/SaveAltOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { routes } from 'configs/app.routes';

import { ListWrapper } from './NavList.styles';

const NavList = ({ logout }) => (
    <ListWrapper>
        <ListItem>
            <Button
                activeClassName="Mui-active"
                component={NavLink}
                to={routes._app.dashboard}
                startIcon={<WebIcon />}
            >
                <Typography variant="h4">Dashboard</Typography>
            </Button>
        </ListItem>
        <ListItem>
            <Button
                component="div"
                startIcon={<SaveIcon sx={{ transform: 'rotate(-90deg)' }} />}
                onClick={logout}
            >
                <Typography variant="h4">Logout</Typography>
            </Button>
        </ListItem>
    </ListWrapper>
);

NavList.propTypes = {
    logout: PropTypes.func.isRequired,
};
export default NavList;
