import { connect } from 'react-redux';

import { getPosts } from 'state/selectors/editor.selectors';

import HomePage from './HomePage';

const mapStateToProps = (state) => ({
    posts: getPosts(state),
});

export default connect(mapStateToProps, null)(HomePage);
