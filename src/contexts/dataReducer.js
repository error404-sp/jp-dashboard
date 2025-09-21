export const dataInitialState = {
  favourites: [],
  orders: [],
  activePage: null,
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_PAGE":
      return { ...state, activePage: action.payload };

    case "ADD_FAVOURITE":
      if (state.favourites.some((fav) => fav.id === action.payload.id))
        return state;
      return { ...state, favourites: [...state.favourites, action.payload] };

    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter(
          (fav) => fav.id !== action.payload.id
        ),
      };
    case "SET_ORDERS":
      return {
        ...state,
        orders: action.payload,
        selectedOrders: [],
      };

    case "TOGGLE_ORDER_SELECTION":
      const { id, selected } = action.payload;
      return {
        ...state,
        selectedOrders: selected
          ? [...state.selectedOrders, id]
          : state.selectedOrders.filter((orderId) => orderId !== id),
      };

    case "ADD_ORDER":
      return { ...state, orders: [...state.orders, action.payload] };

    default:
      return state;
  }
};
