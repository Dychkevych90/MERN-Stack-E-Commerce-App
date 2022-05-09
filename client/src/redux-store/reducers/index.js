const initialState = {
  user: {},
  users: [],
  products: [],
  cart: [],
  order: [],
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

    case "ORDER":
      return {
        ...state,
        order: action.order
      }

    default:
      return state;
  }
};

export default reducer;
