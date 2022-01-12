import React, {useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { generatePath } from 'react-router';
import { Link } from 'react-router-dom';

import ListItemBase from '@mui/material/ListItem';
import Button from '@mui/material/Button';

import { routes } from 'configs/app.routes';

const ListItem = ({ post, deleteDocument }) => {

    const handleDelete = useCallback(() => {
        deleteDocument(post.id);
    }, [deleteDocument, post]);

    return (
        <ListItemBase>
            <div className="post-list">
                {/* <Typography variant="h5" color="primary">{item.title}</Typography> */}
                <div className="post__description" dangerouslySetInnerHTML={{ __html: post.editor }} />
                <Link to={generatePath(routes._app.edit, { id: post.id })}> Edit </Link>
                <Button onClick={handleDelete}>Delite</Button>
            </div>
        </ListItemBase>
    );
};

ListItem.propTypes = {
    post: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    deleteDocument: PropTypes.func.isRequired,
};

export default ListItem;
