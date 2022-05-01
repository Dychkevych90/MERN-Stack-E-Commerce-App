const initialState = {
  user: {},
  users: [],
  products: [],
  cart: [],
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_USERS":
      return {
        ...state,
        users: action.users,
      };

    case "LOGIN_USER":
      return {
        ...state,
        user: action.user,
      };

    case "IS_LOADING_SUCCESSFUL":
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case "PRODUCTS":
      return {
        ...state,
        products: action.products,
      };

    case "CART":
      return {
        ...state,
        cart: action.cart
      }

    default:
      return state;
  }
};

export default reducer;
