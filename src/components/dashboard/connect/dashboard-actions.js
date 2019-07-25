import { getRepositories } from '../../../service/github-repositories-service';

export const setGithubRepoData = (items, total_count) => ({
    type: 'SET_GITHUB_REPOS',
    total_count,
    items
});

export const setIsLoading = isLoading => ({
    type: 'SET_IS_LOADING',
    isLoading
});

export const searchTrigerred = (filteredResults,isSearchTrigerred) => ({
    type: 'SEARCH_TRIGGERED',
    filteredResults,
    isSearchTrigerred
});

export const setQueryText = queryText => ({
    type: 'SET_QUERY_TEXT',
    queryText
});

export const getRepositoriesData = url => dispatch => {

    return getRepositories(url).then(response => {
        const { items, total_count } = response;

        return dispatch({
            type: 'SET_GITHUB_REPOS',
            items,
            total_count
        })
    });
};
