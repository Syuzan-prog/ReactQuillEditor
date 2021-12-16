import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { LoaderContainer } from 'components/common/Loader';
import EditPost from './EditPost';
// import Editpost from './EditPost'

const Edit = ({fetchPost, match, post, isLoading}) => {

    useEffect(() => {
        fetchPost(match.params.id);
    }, []);

    return (
        <LoaderContainer isLoading={isLoading}>
            {
                post ? <EditPost editPostID={match.params.id} /> : null
            }
        </LoaderContainer>         
    );
};

Edit.propTypes = {
    fetchPost: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    }),
    post: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}

export default Edit;
