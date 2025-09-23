import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import * as dashboardData from "../data/dashboard.json";
const useMetrics = () => {
  const { state, dispatch } = useContext(DataContext);
  const fetchDashboardData = async () => {
    const { metrics, topSellingProducts, contacts } = dashboardData;

    dispatch({
      type: "SET_DASHBOARD_DATA",
      payload: {
        metrics: metrics,
        topSellingProducts: topSellingProducts,
        contacts: contacts,
      },
    });
  };

  const fetchChartsData = async () => {
    const { charts } = dashboardData;
    dispatch({ type: "SET_CHARTS_DATA", payload: charts });
  };

  const fetchNotifications = async () => {
    const { notifications } = dashboardData;
    dispatch({ type: "SET_NOTIFICATIONS", payload: notifications });
  };

  const fetchActivities = async () => {
    const { activities } = dashboardData;
    dispatch({ type: "SET_ACTIVITIES", payload: activities });
  };

  return {
    metrics: state.metrics,
    topSellingProducts: state.topSellingProducts,
    contacts: state.contacts,
    charts: state.charts,
    notifications: state.notifications,
    activities: state.activities,
    fetchDashboardData,
    fetchChartsData,
    fetchNotifications,
    fetchActivities,
  };
};

export default useMetrics;
