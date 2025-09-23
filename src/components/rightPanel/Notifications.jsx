import React, { useEffect } from "react";
import styles from "./rightPanel.module.css";
import Skeleton from "@mui/material/Skeleton";
import useLoading from "../../hooks/useLoading";
import useMetrics from "../../hooks/useMetrics";
import {
  BugReportOutlined,
  CellTowerOutlined,
  PersonOutlineRounded,
} from "@mui/icons-material";

const ICON_MAP = {
  bug: BugReportOutlined,
  newuser: PersonOutlineRounded,
  broadcast: CellTowerOutlined,
};

const Notifications = () => {
  const { withLoading, isLoading } = useLoading(500);
  const { fetchNotifications, notifications } = useMetrics();

  useEffect(() => {
    withLoading(async () => {
      await fetchNotifications();
    });
  }, []);

  return (
    <div className={styles.rightPanelSection}>
      <h3 className={styles.sectionTitle}>Notifications</h3>
      <div className={styles.timelineWrapper}>
        {isLoading || !notifications
          ? [...Array(4)].map((_, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineIcon}>
                  <Skeleton variant="circular" width={32} height={32} />
                </div>
                <div className={styles.timelineContent}>
                  <Skeleton variant="text" width={180} height={14} />
                  <Skeleton variant="text" height={12} />
                </div>
              </div>
            ))
          : notifications.map((item, idx) => {
              const IconComponent = ICON_MAP[item.icon] || null;
              return (
                <div className={styles.timelineItem}>
                  <div className={styles.timelineIcon}>
                    {IconComponent && <IconComponent />}
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineMessage}>{item.message}</div>
                    <div className={styles.timelineTime}>{item.time}</div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Notifications;
