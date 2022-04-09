const initialState = {
  user: {},
  users: [],
  isFetching: false,
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
      case 'GET_ALL_USERS':
        return {
          ...state,
          users: action.users
        }

      case 'LOGIN_USER':
        return {
          ...state,
          user: action.user
        }

      case 'IS_LOADING_SUCCESSFUL':
        return {
          ...state,
          isFetching: action.isFetching
        }

      default:
      return state;
    }
}

export default reducer;