import { useContext } from "react";
import styles from "./layout.module.css";
import { UIContext } from "../../contexts/UIContext";
import Navigation from "./Navigation";
import {
  HistoryTwoTone,
  NotificationsNoneTwoTone,
  StarTwoTone,
  ViewSidebarOutlined,
  ViewSidebarRounded,
  ViewSidebarTwoTone,
  WbSunnyTwoTone,
} from "@mui/icons-material";
import ThemeIcon from "../../ui/ThemeIcon";

const Navbar = () => {
  const { state, dispatch } = useContext(UIContext);
  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });
  const toggleSidePanel = () => dispatch({ type: "TOGGLE_SIDEPANEL" });
  const toggleRightPanel = () => dispatch({ type: "TOGGLE_RIGHTPANEL" });
  const toggleNotifs = () => dispatch({ type: "TOGGLE_NOTIFS" });
  const toggleRecents = () => dispatch({ type: "TOGGLE_RECENT" });

  return (
    <nav className={styles.navBar}>
      <button
        type="button"
        aria-label="Toggle side panel"
        onClick={toggleSidePanel}
      >
        <ThemeIcon icon={ViewSidebarTwoTone} />
      </button>
      <button type="button" aria-label="Add to favourites" onClick={() => {}}>
        <ThemeIcon icon={StarTwoTone} />
      </button>
      <Navigation />

      <button type="button" aria-label="Change theme" onClick={toggleTheme}>
        <ThemeIcon icon={WbSunnyTwoTone} />
      </button>

      <button
        type="button"
        aria-label="Show recent activities"
        onClick={toggleRecents}
      >
        <ThemeIcon icon={HistoryTwoTone} />
      </button>

      <button
        type="button"
        aria-label="Show notifications"
        onClick={toggleNotifs}
      >
        <ThemeIcon icon={NotificationsNoneTwoTone} />
      </button>

      <button
        type="button"
        aria-label="Toggle RightPanel"
        onClick={toggleRightPanel}
      >
        <ThemeIcon icon={ViewSidebarTwoTone} />
      </button>
    </nav>
  );
};

export default Navbar;
