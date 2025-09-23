import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LogoIcon } from "../../ui/LogoIcon";
import Item from "./Item";
import styles from "./sidePanel.module.css";
import { DataContext } from "../../contexts/DataContext";
import { UIContext } from "../../contexts/UIContext";
import { sidePanelConfig } from "../../config/sidePanelConfig";

const SidePanel = () => {
  const { state: uiState, dispatch: uiDispatch } = useContext(UIContext);
  const { state } = useContext(DataContext);

  const { breakpoint, sidePanel } = uiState;
  const handleClose = () => uiDispatch({ type: "CLOSE_SIDE_PANEL" });

  if (breakpoint === "desktop") {
    return (
      <nav className={styles.sidePanel}>
        <NavLink to={"/"}>
          <div className={styles.logoDiv}>
            <LogoIcon />
            <p>ByeWind</p>
          </div>
        </NavLink>

        <div style={{ marginLeft: 10 }}>
          <div className={styles.categoryItem}>Favourites</div>
          {state.favourites?.map((child) => (
            <Item key={child.id} item={child} level={1} />
          ))}
        </div>

        {sidePanelConfig.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </nav>
    );
  }

  if (!sidePanel) return null;

  return (
    <div className={styles.sidePanelModalOverlay} onClick={handleClose}>
      <div
        className={styles.sidePanelModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.sidePanelCloseBtn} onClick={handleClose}>
          &times;
        </button>

        <NavLink to={"/"}>
          <div className={styles.logoDiv}>
            <LogoIcon />
            <p>ByeWind</p>
          </div>
        </NavLink>

        <div style={{ marginLeft: 10 }}>
          <div className={styles.categoryItem}>Favourites</div>
          {state.favourites?.map((child) => (
            <Item key={child.id} item={child} level={1} />
          ))}
        </div>

        {sidePanelConfig.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SidePanel;
