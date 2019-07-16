const dashBoardReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_GITHUB_REPOS':
      return {
        ...state,
        total_count: action.total_count,
        items: action.items
      }
      case 'SET_IS_LOADING': 
      return {
        ...state,
        isLoading: action.isLoading
      }
      case 'SEARCH_TRIGGERED':
      return {
        ...state,
        filteredResults: action.filteredResults,
        total_count: action.filteredResults.length,
        isSearchTrigerred: action.isSearchTrigerred
      }
      default:
        return state
    }
  }
  
  export default dashBoardReducer;
  