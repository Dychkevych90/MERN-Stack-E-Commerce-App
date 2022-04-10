const setAllUsers = ( users ) => {
  return ( dispatch ) => {
    dispatch( {
      type: 'GET_ALL_USERS',
      users: users
    } );
  };
}

const setUser = ( user ) => {
  return ( dispatch ) => {
    dispatch( {
      type: "LOGIN_USER",
      user: user
    } );
  };
}

const isLoadingSuccessful = ( isFetching ) => {
  return ( dispatch ) => {
    dispatch( {
      type: "IS_LOADING_SUCCESSFUL",
      isFetching: isFetching
    } );
  };
}

const setProducts = ( products ) => {
  return ( dispatch ) => {
    dispatch( {
      type: "PRODUCTS",
      products: products
    } );
  };
}

export {
  setAllUsers,
  setUser,
  isLoadingSuccessful,
  setProducts,
}