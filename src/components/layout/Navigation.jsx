import { SearchOutlined } from "@mui/icons-material";
import styles from "./layout.module.css";
import ThemeIcon from "../../ui/ThemeIcon";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const getLocation = () => {
    switch (location.pathname) {
      case "/":
        return `Dashboard  /  Default`;
      case "/orders":
        return `eCommerce  /  Orders`;
    }
  };

  return (
    <div className={styles.navigation}>
      <p fontSize={12} fontWeight={500}>
        {getLocation()}
      </p>
      <div className={styles.searchDiv}>
        <ThemeIcon
          icon={SearchOutlined}
          width={16}
          height={16}
          className={styles.iconColor}
        />
        <input type="text" disabled placeholder="Search" />
      </div>
    </div>
  );
};

export default Navigation;
