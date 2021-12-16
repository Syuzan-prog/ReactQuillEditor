import { connect } from 'react-redux';

import { fetchPost } from 'state/modules/editor';
import { getPostUpdateInitialState, getPostsIsLoading } from 'state/selectors/editor.selectors';

import Edit from './Edit';

const mapStateToProps = (state) => ({
    post: getPostUpdateInitialState(state),
    isLoading: getPostsIsLoading(state),
});

const mapDispatchToProps = {
    fetchPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
