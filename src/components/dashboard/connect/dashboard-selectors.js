export function select(state) {
    const { items = [], total_count = 0, isLoading = true } = state.dashboardReducers;
    return Object.assign({}, {
        items,
        total_count,
        isLoading
    });
}