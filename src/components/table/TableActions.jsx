import React from "react";
import styles from "./table.module.css";
import ThemeIcon from "../../ui/ThemeIcon";
import {
  AddOutlined,
  FilterListOutlined,
  SwapVertOutlined,
} from "@mui/icons-material";
import useOrders from "../../hooks/useOrders";
import Search from "./Search";

const TableActions = () => {
  const { orders, applySort, toggleFilter, selectedOrders, isFiltered } =
    useOrders();

  return (
    <div className={styles.tableActions}>
      <div>
        <button disabled className={styles.disabledBtn}>
          <ThemeIcon icon={AddOutlined} />
        </button>

        <button onClick={toggleFilter}>
          <ThemeIcon icon={FilterListOutlined} />
        </button>

        <button onClick={() => applySort("project")}>
          <ThemeIcon icon={SwapVertOutlined} />
        </button>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default TableActions;
