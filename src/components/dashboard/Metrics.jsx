import React from "react";
import styles from "./dashboard.module.css";
import useMetrics from "../../hooks/useMetrics";
import { Skeleton } from "@mui/material";
import ThemeIcon from "../../ui/ThemeIcon";
import { TrendingDownOutlined, TrendingUpOutlined } from "@mui/icons-material";

const Metrics = () => {
  const { metrics } = useMetrics();
  let metricsData = metrics;

  return (
    <div className={styles.metricsDiv}>
      {metricsData.map((metric, idx) => (
        <div
          className={`${styles.metricEle} ${`color${idx + 1}`}`}
          key={idx}
          role="group"
          aria-labelledby={`metric-${idx}`}
        >
          <p className={styles.metricLabel}>{metric.label}</p>

          <div className={styles.metricValueRow}>
            <p className={styles.metricValue}>{metric.value}</p>

            <p
              className={styles.metricChange}
              aria-label={`Change: ${metric.change}`}
            >
              <span>
                {metric.change.startsWith("+") ? (
                  <ThemeIcon icon={TrendingUpOutlined} />
                ) : (
                  <ThemeIcon icon={TrendingDownOutlined} />
                )}
              </span>
              <span>{metric.change}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
