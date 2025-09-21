import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";

const useOrders = (limit = 10) => {
  const { state } = useContext(DataContext);
  const { orders } = state;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(orders.length / limit);

  const paginatedOrders = orders.slice(
    (currentPage - 1) * limit,
    (currentPage - 1) * limit + limit
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return { paginatedOrders, currentPage, totalPages, goToPage };
};

export default useOrders;
