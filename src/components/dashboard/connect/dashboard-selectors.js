export function select(state) {
    const { 
            items = [], total_count = 0, isLoading = true,
            filteredResults = [], isSearchTrigerred = false,
            queryText = 'language:python+language:javascript+language:c'
        } = state.dashboardReducers;
    return Object.assign({}, {
        items,
        total_count,
        isLoading,
        filteredResults,
        isSearchTrigerred,
        queryText
    });
}