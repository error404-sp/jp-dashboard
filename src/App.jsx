import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { UIProvider } from "./contexts/UIContext";
import Dashboard from "./pages/dashboard/Dashboard";
import OrderList from "./pages/orders/OrderList";
import Layout from "./components/layout/Layout";
import "./styles/global.css";

const App = () => {
  return (
    <UIProvider>
      <DataProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" index element={<Dashboard />} />
              <Route path="/orders" element={<OrderList />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </DataProvider>
    </UIProvider>
  );
};

export default App;
