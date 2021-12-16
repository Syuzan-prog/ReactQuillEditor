import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { LoaderContainer } from 'components/common/Loader';
import EditPost from './EditPost';
// import Editpost from './EditPost'

const Edit = ({fetchPost,editDocument, match, post, isLoading}) => {

    useEffect(() => {
        fetchPost(match.params.id);
    }, []);
    return (
        <LoaderContainer isLoading={isLoading}>
            {
                post ? <EditPost editPostID={match.params.id} post={post} editDocument={editDocument} /> : null
            }
        </LoaderContainer>         
    );
};

Edit.propTypes = {
    fetchPost: PropTypes.func.isRequired,
    editDocument: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    }),
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        editor: PropTypes.string,
    })),
}

export default Edit;
