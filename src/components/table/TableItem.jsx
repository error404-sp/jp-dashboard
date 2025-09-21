import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import CustomProfile from "../../ui/CustomProfile";
import { Skeleton } from "@mui/material";
import styles from "./table.module.css";

const TableItem = ({ item, isLoading }) => {
  const { state, dispatch } = useContext(DataContext);

  const isChecked = item ? state.selectedOrders.includes(item.id) : false;

  const handleCheckboxChange = (checked) => {
    dispatch({
      type: "TOGGLE_ORDER_SELECTION",
      payload: { id: item.id, selected: checked },
    });
  };

  if (isLoading) {
    return (
      <tr>
        <td></td>
        <td>
          <Skeleton variant="text" />
        </td>
        <td>
          <div className="profile">
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
    <tr>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => handleCheckboxChange(e.target.checked)}
        />
      </td>

      <td>{item?.id}</td>

      <td className={styles.profile}>
        {<CustomProfile icon={item.user.icon} alt={item.user.name} />}
        <div>{item.user.name}</div>
      </td>

      <td>{item.project}</td>
      <td>{item.address}</td>
      <td>{item.date}</td>

      <td
        style={{
          color:
            item.status === "Pending"
              ? "orange"
              : item.status === "Complete"
              ? "green"
              : item.status == "Rejected"
              ? "red"
              : "gray",
        }}
      >
        {item.status}
      </td>
    </tr>
  );
};

export default TableItem;
