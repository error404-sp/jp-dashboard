import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";

const useOrders = (limit = 10) => {
  const { state, dispatch } = useContext(DataContext);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(state.orders.length / limit);

  const paginatedOrders = state.orders.slice(
    (currentPage - 1) * limit,
    (currentPage - 1) * limit + limit
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [state.orders]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    paginatedOrders,
    currentPage,
    totalPages,
    goToPage,
    dispatch,
    state,
    orders: state.orders,
    allOrders: state.allOrders,
    selectedOrders: state.selectedOrders,
    sort: state.sort,
    isFiltered: state.isFiltered,

    setAllOrders: (data) => dispatch({ type: "SET_ALL_ORDERS", payload: data }),

    resetOrders: () => dispatch({ type: "RESET_ORDERS" }),

    toggleFilter: () => dispatch({ type: "TOGGLE_FILTER" }),

    toggleSelectOrder: (orderId) =>
      dispatch({ type: "TOGGLE_SELECT_ORDER", payload: orderId }),

    applySort: (key) => dispatch({ type: "APPLY_SORT", payload: { key } }),

    searchOrders: (query) =>
      dispatch({ type: "SEARCH_ORDERS", payload: query }),
  };
};

export default useOrders;
