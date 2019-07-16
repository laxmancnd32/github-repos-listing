export const setGithubRepoData = (items, total_count) => ({
    type: 'SET_GITHUB_REPOS',
    total_count,
    items
});

export const setIsLoading = isLoading => ({
    type: 'SET_IS_LOADING',
    isLoading
});
