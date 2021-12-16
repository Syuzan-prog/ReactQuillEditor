import { connect } from 'react-redux';

import { fetchPosts } from 'state/modules/editor';
import { getPosts, getPostsIsLoading, getPostsHasMore} from 'state/selectors/editor.selectors';

import HomePage from './HomePage';

const mapStateToProps = (state) => ({
    posts: getPosts(state),
    isLoading: getPostsIsLoading(state),
    hasMore: getPostsHasMore(state),
});

const mapDispatchToProps = {
    fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

