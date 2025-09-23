import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import CustomProfile from "../../ui/CustomProfile";
import { Skeleton } from "@mui/material";
import styles from "./table.module.css";
import { CalendarTodayOutlined } from "@mui/icons-material";
import ThemeIcon from "../../ui/ThemeIcon";
import useOrders from "../../hooks/useOrders";

const TableItem = ({ item, isLoading }) => {
  const { toggleSelectOrder, selectedOrders } = useOrders();

  if (isLoading) {
    return (
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <Skeleton variant="text" />
        </td>
        <td>
          <div className={styles.profile}>
            <Skeleton variant="circular" width={24} height={24} />
            <Skeleton variant="text" />
          </div>
          <Skeleton variant="text" />
        </td>
        <td>
          <Skeleton variant="text" />
        </td>
        <td>
          <Skeleton variant="text" />
        </td>
        <td>
          <Skeleton variant="text" />
        </td>
        <td>
          <Skeleton variant="text" />
        </td>
      </tr>
    );
  }

  return (
    <tr onClick={() => toggleSelectOrder(item?.id)}>
      <td>
        <input
          type="checkbox"
          checked={selectedOrders.includes(item?.id)}
          onChange={() => toggleSelectOrder(item?.id)}
          onClick={() => toggleSelectOrder(item?.id)}
        />
      </td>

      <td>{item?.id}</td>

      <td className={styles.profile}>
        {<CustomProfile icon={item.user.icon} alt={item.user.name} />}
        <div>{item.user.name}</div>
      </td>

      <td>{item.project}</td>
      <td>{item.address}</td>
      <td>
        <ThemeIcon icon={CalendarTodayOutlined} />
        {item.date}
      </td>

      <td
        style={{
          color:
            item.status === "Pending"
              ? "#59A8D4"
              : item.status === "In Progress"
              ? "#8A8CD9"
              : item.status == "Complete"
              ? "#4AA785"
              : item.status == "Approved"
              ? "#FFC555"
              : "gray",
        }}
      >
        {item.status}
      </td>
    </tr>
  );
};

export default TableItem;
