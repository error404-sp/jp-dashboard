import { SearchOutlined } from "@mui/icons-material";
import useOrders from "../../hooks/useOrders";
import styles from "./table.module.css";
import ThemeIcon from "../../ui/ThemeIcon";

const Search = () => {
  const { searchOrders } = useOrders();
  return (
    <div className={styles.search}>
      <ThemeIcon
        icon={SearchOutlined}
        width={16}
        height={16}
        style={{ color: "var(--border-black)" }}
      />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => searchOrders(e.target.value)}
        style={{ marginTop: "10px", display: "block" }}
      />
    </div>
  );
};

export default Search;
