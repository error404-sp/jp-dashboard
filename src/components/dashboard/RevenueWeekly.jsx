import React, { useContext } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import useMetrics from "../../hooks/useMetrics";
import { UIContext } from "../../contexts/UIContext";
import styles from "./dashboard.module.css";

const RevenueWeekly = () => {
  const { charts } = useMetrics();
  const { revenueLineGraph } = charts;
  const { theme } = useContext(UIContext);

  const chartData = revenueLineGraph?.map((item, idx) => ({
    label: item.name,
    prevWeek: item.previous,
    currentLine: idx < 4 ? item.current : null,
    currentDashed: idx >= 3 ? item.current : null,
  }));

  return (
    <div
      className={`${styles.revenueWrapper} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
      aria-labelledby="weekly-revenue-heading"
      role="region"
    >
      <header className={styles.revenueHeader}>
        <h2 id="weekly-revenue-heading" className={styles.title}>
          Revenue
        </h2>
        <span className={styles.revenueDivider} aria-hidden="true">
          |
        </span>

        <ul
          className={styles.revenueLegendGroup}
          aria-label="Weekly revenue comparison"
        >
          <li className={styles.revenueLegendItem}>
            <span
              className={`${styles.revenueLegendDot} ${styles.currentDot}`}
              aria-hidden="true"
            />
            <span className={styles.revenueLegendText}>Current Week</span>
            <span
              className={styles.revenueLegendValue}
              aria-label="Current week revenue is 58,211 dollars"
            >
              $58,211
            </span>
          </li>
          <li className={styles.revenueLegendItem}>
            <span
              className={`${styles.revenueLegendDot} ${styles.previousDot}`}
              aria-hidden="true"
            />
            <span className={styles.revenueLegendText}>Previous Week</span>
            <span
              className={styles.revenueLegendValue}
              aria-label="Previous week revenue is 68,768 dollars"
            >
              $68,768
            </span>
          </li>
        </ul>
      </header>

      <ResponsiveContainer height={232} width="100%">
        <LineChart
          data={chartData}
          margin={{ top: 16, right: 0, left: 0, bottom: 0 }}
          role="img"
          aria-label="Line chart showing weekly revenue trends"
        >
          <CartesianGrid vertical={false} stroke="var(--border-light)" />
          <XAxis
            dataKey="label"
            tickLine={false}
            stroke="var(--light)"
            tick={{ fontSize: 12, fontWeight: 400, fill: "var(--text-light)" }}
            padding={{ left: 30, right: 30 }}
            aria-label="Weeks"
          />
          <YAxis
            ticks={[0, 10, 20, 30]}
            tickFormatter={(v) => (v > 0 ? `${v}M` : v)}
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 400,
              fill: "var(--text-light)",
              dy: -6,
            }}
            width={35}
            aria-label="Revenue in millions"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--background)",
              border: `1px solid var(--border-light)`,
              fontFamily: "Inter, sans-serif",
              color: "var(--primary-black)",
              outline: "none",
            }}
          />
          <Line
            type="natural"
            dot={false}
            dataKey="prevWeek"
            stroke="#A8C5DA"
            strokeWidth={3}
          />
          <Line
            type="natural"
            dataKey="currentLine"
            stroke="var(--primary-black)"
            strokeWidth={3}
            dot={false}
            connectNulls
          />
          <Line
            type="natural"
            dataKey="currentDashed"
            stroke="var(--primary-black)"
            strokeWidth={3}
            dot={false}
            strokeDasharray="5 5"
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueWeekly;
