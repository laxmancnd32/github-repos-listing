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
      default:
        return state
    }
  }
  
  export default dashBoardReducer;
  