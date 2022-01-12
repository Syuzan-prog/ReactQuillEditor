import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ScrollActionContainer from 'components/common/ScrollActionContainer';
import { routes } from 'configs/app.routes';
import ListItem from './ListItem';

import { HomePageWrapper } from './HomePage.styles';

const HomePage = ({ posts, fetchPosts, deleteDocument, isLoading, hasMore }) => {

    useEffect(() => {
        fetchPosts(20, 0, true);
    }, [fetchPosts]);

    const containerRef = useRef();
    console.log("posts", posts)
    return (
        <HomePageWrapper>
            <div className="header">
                <Typography variant="h2" className="HomePage__tittle">
                    Powerful rich text editor
                </Typography>
                <Button
                    component={NavLink}
                    to={routes._app.dashboard}
                    color="primary"
                    variant="contained"
                >
                    Create Now
                </Button>
            </div>
            <div className="scroll-block" ref={containerRef}>
                <ScrollActionContainer
                    isLoading={isLoading}
                    hasMore={hasMore}
                    onScrollEnd={fetchPosts}
                    className={clsx('result-container', { loading: isLoading && !posts.length })}
                    scrollElement={containerRef?.current}
                >
                    <List>
                        {posts.map((post) => (
                            <ListItem key={post.id} post={post} deleteDocument={deleteDocument} />
                        ))}
                    </List>
                    {(!isLoading && !posts.length) && 'no Result'}
                </ScrollActionContainer>
            </div>
        </HomePageWrapper>
    );
};

HomePage.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    deleteDocument: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    hasMore: PropTypes.bool,
};

export default HomePage;
