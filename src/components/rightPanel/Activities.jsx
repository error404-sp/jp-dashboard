import React, { useEffect } from "react";
import styles from "./rightPanel.module.css";
import CustomProfile from "../../ui/CustomProfile";
import useLoading from "../../hooks/useLoading";
import Skeleton from "@mui/material/Skeleton";
import useMetrics from "../../hooks/useMetrics";

const Activities = () => {
  const { withLoading, isLoading } = useLoading(500);
  const { fetchActivities, activities } = useMetrics();

  useEffect(() => {
    withLoading(async () => {
      await fetchActivities();
    });
  }, []);

  if (isLoading || !activities) {
    return (
      <div className={styles.rightPanelSection}>
        <h3 className={styles.sectionTitle}>Activities</h3>
        <div className={styles.timeline}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <Skeleton variant="circular" width={32} height={32} />
              </div>
              <div className={styles.timelineContent}>
                <Skeleton variant="text" width={150} height={14} />
                <Skeleton variant="text" height={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.rightPanelSection}>
      <h3 className={styles.sectionTitle}>Activities</h3>
      <div className={styles.timeline}>
        {activities.map((item, idx) => (
          <div key={idx} className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              <CustomProfile icon={item.icon} alt="activity" />
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineMessage}>{item.message}</div>
              <div className={styles.timelineTime}>{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
