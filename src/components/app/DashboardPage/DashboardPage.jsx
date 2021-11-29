import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
// import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import { withUserType } from 'components/app/UserTypeContext';

import { ResearcherViewSwitchWrapper } from './DashboardPage.styles';
import CreatePage from '../CreatePage';

const DashboardPage = ({ isAdmin }) => (
    <div>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={9}>
                <CreatePage />
            </Grid>

        </Grid>
        {isAdmin && (
        <ResearcherViewSwitchWrapper>
            <Typography variant="h5">Research admin mode</Typography>
            {/* <Switch checked={!isResearcherView} onChange={handleChange} /> */}
        </ResearcherViewSwitchWrapper>
            )}
    </div>
);

DashboardPage.propTypes = {
    isAdmin: PropTypes.bool.isRequired,
};

export default withUserType(DashboardPage);
