import { createSelector } from 'reselect';

const getPostsState = (state) => state.posts;

export const getPostsIsLoading = createSelector(
    getPostsState,
    (state) => state.isLoading
);
export const getPostUpdateInitialState = createSelector(
    getPostsState,
    (state) => state.post
);
export const getPostsIsLoaded = createSelector(
    getPostsState,
    (state) => state.isLoaded
);

const getPostsIdMap = createSelector(
    getPostsState,
    (state) => state.idMap
);

const getPostsEntities = createSelector(
    getPostsState,
    (state) => state.entities
);

export const getPosts = createSelector(
    getPostsIdMap,
    getPostsEntities,
    (idMap, entities) => idMap.map((id) => entities[id])
);

export const getPostsHasMore = createSelector(
    getPostsState,
    (state) => state.hasMore
);

export const getPostsOffset = createSelector(
    getPosts,
    (posts) => posts.length
);
