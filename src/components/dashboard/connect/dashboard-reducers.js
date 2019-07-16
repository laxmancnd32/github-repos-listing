const dashBoardReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_GITHUB_REPOS':
      return {
        ...state,
        total_count: action.total_count,
        items: action.items,
        isSearchTrigerred: false
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
        isSearchTrigerred: action.isSearchTrigerred
      }
      case 'SET_QUERY_TEXT':
      return {
        ...state,
        queryText : action.queryText,
        isSearchTrigerred: false
      }
      default:
        return state
    }
  }
  
  export default dashBoardReducer;
  