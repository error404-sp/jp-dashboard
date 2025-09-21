import { useContext } from "react";
import { sidePanelConfig } from "../../config/sidePanelConfig";
import Item from "./Item";
import styles from "./sidePanel.module.css";
import { DataContext } from "../../contexts/DataContext";

const SidePanel = () => {
  const { state, dispatch } = useContext(DataContext);
  return (
    <nav className={styles.sidePanel}>
      <div style={{ marginLeft: 10 }}>
        <div className={styles.categoryItem}>Favourites</div>
        {state.favourites?.map((child) => (
          <Item key={child.id} item={child} level={level + 1} />
        ))}
      </div>
      {sidePanelConfig.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </nav>
  );
};

export default SidePanel;
