import { useContext, useEffect } from "react";
import TableWithInput from "../../components/table/TableWithInput";
import { DataContext } from "../../contexts/DataContext";
import styles from "./orders.module.css";
import useOrders from "../../hooks/useOrders";
import useLoading from "../../hooks/useLoading";
import TableActions from "../../components/table/TableActions";
import Pagination from "../../components/table/Pagination";
import * as orderData from "../../data/orders.json";

const OrderList = () => {
  const {
    paginatedOrders,
    currentPage,
    totalPages,
    goToPage,
    orders,
    setAllOrders,
  } = useOrders(10);
  const { isLoading, withLoading } = useLoading(true, 1000);

  const fetchOrders = async () => {
    try {
      await withLoading(async () => {
        const data = orderData.orders;
        // const data = await res.json();
        setAllOrders(data);
      });
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <section className={styles.orderList}>
      <h2>Order List</h2>
      <div className={styles.orderActions}>
        <TableActions />
      </div>
      <TableWithInput orders={paginatedOrders} isLoading={isLoading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </section>
  );
};

export default OrderList;
