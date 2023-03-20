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
import ResetPassword from "./screens/Reset-password";
import Verifyotp from "./screens/Verifyotp";
import TwoFa from "./screens/2Fa";


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
          <Route path="/2Fa" element={<TwoFa />} />
          <Route path="/verify-otp/:id" element={<Verifyotp />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/MarketNews" element={<MarketNews />} />
          <Route path="/EconomicCalender" element={<EconomicCalender />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
