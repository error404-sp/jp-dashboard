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

    default:
      return state;
  }
};
