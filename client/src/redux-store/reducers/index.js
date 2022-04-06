const initialState = {
  user: {},
  users: []
}

const reducer = ( action, state = initialState ) => {
    switch ( action ) {
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

      default:
      return state;
    }
}

export default reducer;