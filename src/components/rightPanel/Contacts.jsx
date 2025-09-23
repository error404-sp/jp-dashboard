import React from "react";
import styles from "./rightPanel.module.css";
import CustomProfile from "../../ui/CustomProfile";
import useMetrics from "../../hooks/useMetrics";

const Contacts = () => {
  const { contacts } = useMetrics();

  return (
    <div className={styles.rightPanelSection}>
      <h3 className={styles.sectionTitle}>Contacts</h3>
      {contacts.map((item, idx) => (
        <div key={idx} className={styles.contactItem}>
          <CustomProfile icon={item.icon} alt={item.name} />
          <div className={styles.contactName}>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
