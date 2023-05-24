import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Forgot from "./screens/Forgot";
import Home from "./screens/home";
import MarketNews from "./screens/marketNews";
import PlanCard from "./components/PlanCard";
import ProfileSettings from "./screens/ProfileSettings";
import EconomicCalender from "./screens/EconomicCalender";
import Layout from "./components/Layout";
import DataPortal from "./screens/DataPortal";
import ForexNews from "./screens/ForexNews";
import CurrencyNews from "./screens/CurrencyNews";
import CurrencyData from "./screens/CurrencyData";
import CurrencyGraph from "./screens/CurrencyGraph";
import ResetPassword from "./screens/Reset-password";
import Verifyotp from "./screens/Verifyotp";
import TwoFa from "./screens/2FA";
import PlanPurchase from "./screens/Plans";
import GoldAnalysis from "./screens/GoldAnalysis";
import OilAnalysis from "./screens/OilAnalysis";
import SearchScreen from "./screens/SearchScreen";
import Checkout from "./components/CheckoutModal";
import NewsDetail from "./screens/NewsDetail";
import CardPage from "./screens/CardPage";
import CheckoutModal from "./components/CheckoutModal";
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
          <Route path="/checkout/:planName" element={<Checkout />} />
          <Route path="/plans" element={<PlanPurchase />} />
          <Route path="/2Fa" element={<TwoFa />} />
          <Route path="/verify-otp/:id" element={<Verifyotp />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/MarketNews" element={<MarketNews />} />
          <Route path="/EconomicCalender" element={<EconomicCalender />} />
          <Route path="/dataportal" element={<DataPortal />} />
          <Route path="/CurrencyData" element={<CurrencyData />} />
          <Route path="/ForexNews" element={<ForexNews />} />
          <Route path="/CurrencyNews" element={<CurrencyNews />} />
          <Route path="/GoldAnalysis" element={<GoldAnalysis />} />
          <Route path="/OilAnalysis" element={<OilAnalysis />} />
          <Route path="/NewsDetail" element={<NewsDetail />} />
          <Route path="/cards" element={<CardPage />} />
          <Route path="/addcard" element={<CheckoutModal />} />
          <Route
            path="/dataportal/CurrencyGraph/:passedSymbol"
            element={<CurrencyGraph />}
          />
          <Route path="/search" element={<SearchScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
