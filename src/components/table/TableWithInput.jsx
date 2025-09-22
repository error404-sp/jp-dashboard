import React from "react";
import { orderColumns } from "../../config/orderTableConfig";
import TableItem from "./TableItem";
import styles from "./table.module.css";
import useOrders from "../../hooks/useOrders";

const TableWithInput = ({ orders, isLoading, limit = 10 }) => {
  const renderRows = isLoading ? Array.from({ length: limit }) : orders;
  const { selectedOrders, resetOrders } = useOrders();

  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectedOrders.length > 0}
                onClick={() => {
                  resetOrders();
                }}
              />
            </th>
            {orderColumns.map((header, idx) => (
              <th key={idx}>{header} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderRows.map((item, index) => (
            <TableItem
              key={isLoading ? index : item.id}
              item={item}
              isLoading={isLoading}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithInput;
