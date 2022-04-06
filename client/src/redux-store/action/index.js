const getAllUsers = ( users ) => {
  return {
    type: 'GET_ALL_USERS',
    users
  }
}

const setUser = ( user ) => {
  return {
    type: "LOGIN_USER",
    user
  }
}

export {
  getAllUsers,
  setUser,
}