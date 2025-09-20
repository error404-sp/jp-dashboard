import { useContext } from "react";
import styles from "./layout.module.css";
import { UIContext } from "../../contexts/UIContext";

const RightPanel = () => {
  const { state } = useContext(UIContext);
  return (
    <div className={styles.rightPanel}>
      RightPanel
      {state.showNotif && <div>Notifications</div>}
      {state.showRecent && <div>Recents</div>}
      <div>Contacts</div>
    </div>
  );
};
export default RightPanel;
