import React from "react";
import styles from "./dashboard.module.css";
import { projectColumns } from "../../config/projectConfig";
import useMetrics from "../../hooks/useMetrics";

const ProductsTable = () => {
  const { topSellingProducts } = useMetrics();

  return (
    <div className={styles.productsTable}>
      <h2 className={styles.title}>Top Selling Products</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            {projectColumns.map((header, idx) => (
              <th key={idx}>{header} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {topSellingProducts.map((item, index) => (
            <tr>
              {Object.values(item)
                .filter((e, id) => id != 0)
                .map((ele, idx) => (
                  <td>{ele}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
