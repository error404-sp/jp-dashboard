import React from "react";
import { orderColumns } from "../../config/orderTableConfig";
import TableItem from "./TableItem";

const TableWithInput = ({ orders, isLoading, limit = 10 }) => {
  const renderRows = isLoading ? Array.from({ length: limit }) : orders;

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          {orderColumns.map((header, idx) => (
            <th key={idx}>{header}</th>
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
  );
};

export default TableWithInput;
