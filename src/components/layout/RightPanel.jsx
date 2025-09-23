import React, { useContext } from "react";
import styles from "./layout.module.css";
import { UIContext } from "../../contexts/UIContext";
import Contacts from "../rightPanel/Contacts";
import Navbar from "./Navbar";

const RightPanel = () => {
  const { state, dispatch } = useContext(UIContext);
  const { breakpoint, rightPanel, showNotif, showRecent } = state;

  const handleClose = () => dispatch({ type: "CLOSE_RIGHT_PANEL" });

  if (breakpoint === "desktop") {
    return (
      <div className={styles.rightPanel}>
        {showNotif && <div>Notifications</div>}
        {showRecent && <div>Recents</div>}
        <Contacts />
      </div>
    );
  }

  if (!rightPanel) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleClose}>
          &times;
        </button>
        {showNotif && <div>Notifications</div>}
        {showRecent && <div>Recents</div>}
        <Contacts />
      </div>
    </div>
  );
};

export default RightPanel;
