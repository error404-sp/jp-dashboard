import React, { useContext, useEffect } from "react";
import { Skeleton } from "@mui/material";
import useLoading from "../../hooks/useLoading";
import useMetrics from "../../hooks/useMetrics";
import Metrics from "../../components/dashboard/Metrics";
import ProductsTable from "../../components/dashboard/ProductsTable";
import styles from "./dashboard.module.css";
import MonthWise from "../../components/dashboard/MonthWise";
import RevenueWeekly from "../../components/dashboard/RevenueWeekly";
import TotalSales from "../../components/dashboard/TotalSales";
import LocationWise from "../../components/dashboard/LocationWise";
import { DataContext } from "../../contexts/DataContext";

const Dashboard = () => {
  const { withLoading, isLoading } = useLoading(true, 1000);
  const { fetchDashboardData, fetchChartsData } = useMetrics();
  const { state } = useContext(DataContext);
  useEffect(() => {
    withLoading(fetchDashboardData);
    withLoading(fetchChartsData);
  }, []);
  console.log(isLoading);

  return (
    <div className={styles.dashDiv}>
      <h2>eCommerce</h2>
      <div className={styles.dashboardLayout}>
        <Metrics />
        <MonthWise />
        <RevenueWeekly />
        {isLoading ? <Skeleton /> : <LocationWise />}
        <ProductsTable />
        <TotalSales />
      </div>
    </div>
  );
};

export default Dashboard;
