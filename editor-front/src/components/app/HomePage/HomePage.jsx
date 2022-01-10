import React, { useEffect, useCallback, useRef } from 'react';
import clsx from 'clsx';
import { generatePath } from 'react-router';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ScrollActionContainer from 'components/common/ScrollActionContainer';

import { routes } from 'configs/app.routes';

import { HomePageWrapper } from './HomePage.styles';

const HomePage = ({ posts, fetchPosts, deleteDocument, isLoading, hasMore }) => {

    useEffect(() => {
        fetchPosts(20, 0, true);
    }, [fetchPosts]);

    const handleDelete = useCallback(() => {
        // openModal(DELETE_ENTITY_MODAL_NAME, {
        //     id: row.id,
        //     entity: 'datasource',
        //     onDelete: deleteDocument,
        // });
        deleteDocument();
    }, []);

    const containerRef = useRef();
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
                            <ListItem key={post.id}>
                                <div className="post-list" key={post.id}>
                                    {/* <Typography variant="h5" color="primary">{item.title}</Typography> */}
                                    <div className="post__description" dangerouslySetInnerHTML={{ __html: post.editor }} />
                                    <Link to={generatePath(routes._app.edit, { id: post.id })}> Edit </Link>
                                    <Button onClick={handleDelete}>Delite</Button>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                    {(!isLoading && !posts.length) && 'no Result'}
                </ScrollActionContainer>
            </div>
        </HomePageWrapper>
    );
};

HomePage.propTypes = {
    posts: PropTypes.array,
    deleteDocument: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    hasMore: PropTypes.bool,
};

export default HomePage;
