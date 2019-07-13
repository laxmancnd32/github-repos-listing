const dashBoardReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_GITHUB_REPOS':
      return {
        ...state,
        pageName: action.pageName,
        actionCalled: action.actionCalled
      }
      default:
        return state
    }
  }
  
  export default dashBoardReducer;
  