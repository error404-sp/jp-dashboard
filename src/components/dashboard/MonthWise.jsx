import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { UIContext } from "../../contexts/UIContext";
import useMetrics from "../../hooks/useMetrics";
import styles from "./dashboard.module.css";

const MonthWise = () => {
  const { charts } = useMetrics();
  const { monthlyProjections } = charts;

  return (
    <div className={styles.monthWise}>
      <h2 className={styles.title}>Projections vs Actuals</h2>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={monthlyProjections}
          barSize={20}
          margin={{ top: 16, right: 0, left: 0, bottom: 0 }}
        >
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--background)",
              border: `1px solid var(--border-light)`,
              fontFamily: "Inter, sans-serif",
              color: "var(--primary-black)",
            }}
          />
          <CartesianGrid vertical={false} stroke="var(--border-light)" />
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 400,
              fill: "var(--text-light)",
            }}
            stroke="var(--text-light)"
          />
          <YAxis
            ticks={[0, 10, 20, 30]}
            tickFormatter={(value) => (value > 0 ? `${value}` : value)}
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 400,
              fill: "var(--text-light)",
              dy: -6,
            }}
            width={35}
          />
          <Bar
            dataKey="projection"
            stackId="a"
            fill="#A8C5DA"
            activeShape={null}
          />
          <Bar
            dataKey="actual"
            stackId="a"
            radius={[4, 4, 0, 0]}
            fill="#A8C5DA"
            opacity={0.5}
            activeShape={null}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthWise;
