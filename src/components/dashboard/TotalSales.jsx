import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import styles from "./dashboard.module.css";
import useMetrics from "../../hooks/useMetrics";

const TotalSales = () => {
  const { charts } = useMetrics();
  const { sales } = charts || { sales: [] };
  const totalValue = sales?.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Total Sales</h2>

      <div className={styles.chartWrapper}>
        {sales?.length > 0 && (
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={sales}
                cx="50%"
                cy="50%"
                startAngle={30}
                endAngle={-330}
                innerRadius={40}
                outerRadius={70}
                dataKey="value"
                strokeWidth={4}
                paddingAngle={-5}
                cornerRadius={8}
                className={styles.pie}
              >
                {sales.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                wrapperClassName={styles.tooltipWrapper}
                formatter={(value, name, props) => [
                  <span className={styles.percentage}>
                    {((value / totalValue) * 100).toFixed(2)}%
                  </span>,
                  props?.payload?.name || name,
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className={styles.itemsList}>
        {sales?.map((item, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.itemLeft}>
              <span
                className={`${styles.dot} ${styles[`dot${index + 1}`]}`}
                style={{ backgroundColor: item.color }}
              />
              <p className={styles.itemName}>{item?.name}</p>
            </div>
            <p className={styles.itemPrice}>${item?.value.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSales;
