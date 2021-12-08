import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { routes } from 'configs/app.routes';

const HomePage = ({ posts }) => (
    <div className="HomePage">
        <div className="container">
            <div className="row">
                <Typography variant="h2" className="HomePage__tittle">
                    Powerful rich text editor
                </Typography>
                <Button
                    activeClassName="Mui-active"
                    component={NavLink}
                    to={routes._app.dashboard}
                    color="primary"
                    variant="contained"
                >
                    <Typography variant="h4">Create Now</Typography>
                </Button>
                {posts.map((item) => (
                    <div className="post__list" key={item.id}>
                        <Typography variant="h5" color="primary">{item.title}</Typography>

                        <div className="post__description" dangerouslySetInnerHTML={{ __html: item.description }} />
                        <div className="post__description" dangerouslySetInnerHTML={{ __html: item.information }} />
                        <NavLink to={`/Edit/${item.id}`}> Edit </NavLink>

                    </div>
                    ))}
            </div>
        </div>
    </div>
);

HomePage.propTypes = {
    posts: PropTypes.array,

};

export default HomePage;
