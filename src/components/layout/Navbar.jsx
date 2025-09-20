import { useContext } from "react";
import styles from "./layout.module.css";
import { UIContext } from "../../contexts/UIContext";
import Navigation from "./Navigation";

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
        SidePanel
      </button>
      <button type="button" aria-label="Add to favourites" onClick={() => {}}>
        Add Favourites
      </button>
      <Navigation />

      <button type="button" aria-label="Change theme" onClick={toggleTheme}>
        {state.theme}
      </button>

      <button
        type="button"
        aria-label="Show recent activities"
        onClick={toggleRecents}
      >
        Recent
      </button>

      <button
        type="button"
        aria-label="Show notifications"
        onClick={toggleNotifs}
      >
        Notifications
      </button>

      <button
        type="button"
        aria-label="Toggle RightPanel"
        onClick={toggleRightPanel}
      >
        Right Panel
      </button>
    </nav>
  );
};

export default Navbar;
