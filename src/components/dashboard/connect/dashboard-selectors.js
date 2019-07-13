export function select(state) {
    const { pageName = 'Sample' } = state.dashboardReducers;
    const { actionCalled = false } = state.dashboardReducers;
    return Object.assign({}, {
        pageName,
        actionCalled
    });
}