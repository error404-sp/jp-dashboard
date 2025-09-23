import { useContext } from "react";
import styles from "./layout.module.css";
import { UIContext } from "../../contexts/UIContext";
import Navigation from "./Navigation";
import {
  HistoryTwoTone,
  NotificationsNoneTwoTone,
  WbSunnyTwoTone,
} from "@mui/icons-material";
import ThemeIcon from "../../ui/ThemeIcon";

const MiniNav = () => {
  const { state, dispatch } = useContext(UIContext);
  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });
  const toggleNotifs = () => dispatch({ type: "TOGGLE_NOTIFS" });
  const toggleRecents = () => dispatch({ type: "TOGGLE_RECENT" });
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <button
        type="button"
        aria-label="Change theme"
        onClick={toggleTheme}
        className={state.theme == "dark" ? styles.active : ""}
      >
        <ThemeIcon icon={WbSunnyTwoTone} />
      </button>

      <button
        type="button"
        aria-label="Show recent activities"
        onClick={toggleRecents}
        className={state.showRecent ? styles.active : ""}
      >
        <ThemeIcon icon={HistoryTwoTone} />
      </button>

      <button
        type="button"
        aria-label="Show notifications"
        onClick={toggleNotifs}
        className={state.showNotif ? styles.active : ""}
      >
        <ThemeIcon icon={NotificationsNoneTwoTone} />
      </button>
    </div>
  );
};

export default MiniNav;
