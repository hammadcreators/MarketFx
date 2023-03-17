import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Forgot from "./screens/Forgot";
import Home from "./screens/home";
import MarketNews from "./screens/marketNews";

import ProfileSettings from "./screens/ProfileSettings";

const Auth = () => {
  return (
    <Router>
    <Switch>
    <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={Forgot} />
        <Route path="/profile" component={ProfileSettings} />
        <Route path="/" component={Home} />
        <Route path="/MarketNews" component={MarketNews} />

    </Switch>
    </Router>
      
  );
};

export default Auth;
