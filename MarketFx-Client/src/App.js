import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Forgot from "./screens/Forgot";
import Home from "./screens/home";
import MarketNews from "./screens/marketNews";

import ProfileSettings from "./screens/ProfileSettings";
import EconomicCalender from "./screens/EconomicCalender";
import Header from "./components/Header";
import Layout from "./components/Layout";
import DataPortal from "./screens/DataPortal";
import ForexNews from "./screens/ForexNews";
import CurrencyNews from "./screens/CurrencyNews";
import CurrencyData from "./screens/CurrencyData";
import CurrencyGraph from "./screens/CurrencyGraph";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Authentication screens */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/*  */}
          <Route index element={<Home />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/MarketNews" element={<MarketNews />} />
          <Route path="/EconomicCalender" element={<EconomicCalender />} />
          <Route path="/dataportal" element={<DataPortal />} />
          <Route path="/CurrencyData" element={<CurrencyData />} />
          <Route path="/ForexNews" element={<ForexNews />} />
          <Route path="/CurrencyNews" element={<CurrencyNews />} />
          <Route
            path="/dataportal/CurrencyGraph/:passedSymbol"
            element={<CurrencyGraph />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
