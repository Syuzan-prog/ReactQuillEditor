import React, {useRef} from 'react';
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

const HomePage = ({ posts, fetchPosts, isLoading, hasMore }) => {
    const containerRef = useRef();
    return(
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
                                    <ListItem key={post.id} >
                                         <div className="post-list" key={post.id}>
                                            {/* <Typography variant="h5" color="primary">{item.title}</Typography> */}
                                            <div className="post__description" dangerouslySetInnerHTML={{ __html: post.editor }} />
                                            <Link to={generatePath(routes._app.edit, { id: post.id })}> Edit </Link>
                                        </div>
                                    </ListItem>
                                ))}
                            </List>
                            {(!isLoading && !posts.length) && 'no Result'}
                        </ScrollActionContainer>
                    </div>
        </HomePageWrapper>
    )};

HomePage.propTypes = {
    posts: PropTypes.array,
};

export default HomePage;
