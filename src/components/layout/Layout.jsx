import { useContext } from "react";
import { UIContext } from "../../contexts/UIContext";
import Navbar from "./Navbar";
import RightPanel from "./RightPanel";
import SidePanel from "./SidePanel";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  const { state } = useContext(UIContext);
  return (
    <div className={styles.mainContainer}>
      {state.sidePanel && <SidePanel />}
      <main className={styles.mainContent}>
        <Navbar />
        {children}
      </main>
      {state.rightPanel && <RightPanel />}
    </div>
  );
};

export default Layout;
