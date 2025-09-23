export const dataInitialState = {
  favourites: [],
  activePage: null,
  allOrders: [],
  orders: [],
  selectedOrders: [],
  sort: { key: null, direction: null },
  isFiltered: false,
  metrics: [],
  topSellingProducts: [],
  contacts: [],
  charts: {},
  notifications: [],
  activities: [],
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
    case "SET_ALL_ORDERS":
      return {
        ...state,
        allOrders: action.payload,
        orders: action.payload,
        selectedOrders: [],
        sort: { key: null, direction: null },
        isFiltered: false,
      };

    case "RESET_ORDERS":
      return {
        ...state,
        orders: state.allOrders,
        selectedOrders: [],
        sort: { key: null, direction: null },
        isFiltered: false,
      };

    case "TOGGLE_FILTER": {
      const newFilterState = !state.isFiltered;

      const baseOrders =
        state.selectedOrders.length > 0
          ? state.allOrders.filter((o) => state.selectedOrders.includes(o.id))
          : state.allOrders;

      return {
        ...state,
        orders: newFilterState ? baseOrders : [...state.allOrders],
        isFiltered: newFilterState,
        selectedOrders: [],
      };
    }

    case "APPLY_SORT": {
      const sortKey = action.payload.key;
      let sortDirection = "asc";

      if (state.sort.key === sortKey) {
        if (state.sort.direction === "asc") sortDirection = "desc";
        else if (state.sort.direction === "desc") sortDirection = null;
        else sortDirection = "asc";
      }

      let sortedOrders = [...state.orders];
      if (sortDirection) {
        sortedOrders.sort((a, b) => {
          if (a[sortKey] < b[sortKey]) return sortDirection === "asc" ? -1 : 1;
          if (a[sortKey] > b[sortKey]) return sortDirection === "asc" ? 1 : -1;
          return 0;
        });
      } else {
        sortedOrders.sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        });
      }

      return {
        ...state,
        sort: { key: sortDirection ? sortKey : null, direction: sortDirection },
        orders: sortedOrders,
      };
    }

    case "SEARCH_ORDERS": {
      const query = action.payload?.toLowerCase() || "";
      return {
        ...state,
        orders: state.allOrders.filter(
          (order) =>
            Object.values(order).some((val) =>
              String(val).toLowerCase().includes(query)
            ) || order?.user?.name.toLowerCase().includes(query)
        ),
      };
    }

    case "TOGGLE_SELECT_ORDER": {
      const orderId = action.payload;
      return {
        ...state,
        selectedOrders: state.selectedOrders.includes(orderId)
          ? state.selectedOrders.filter((id) => id !== orderId)
          : [...state.selectedOrders, orderId],
      };
    }

    case "SET_DASHBOARD_DATA":
      return {
        ...state,
        metrics: action.payload.metrics,
        topSellingProducts: action.payload.topSellingProducts,
        contacts: action.payload.contacts,
      };

    case "SET_CHARTS_DATA":
      return { ...state, charts: action.payload };

    case "SET_NOTIFICATIONS":
      return { ...state, notifications: action.payload };

    case "SET_ACTIVITIES":
      return { ...state, activities: action.payload };

    default:
      return state;
  }
};
