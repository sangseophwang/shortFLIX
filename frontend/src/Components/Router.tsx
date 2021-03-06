import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Introduction from "../Routes/Introduction";
import MyPage from "../Routes/Mypage";
import Report from "../Routes/Report";
import Result from "../Routes/Result";
import Test from "../Routes/Test";
import WatchVideo from "../Routes/WatchVideo";
import Register from "./Auth/Register";
import Login from "./Auth/Login";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/introduction" component={Introduction} />
        <Route exact path="/test" component={Test} />
        <Route path="/test/:detail" component={Test} />
        <Route path="/report/:id" component={Report} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/watchvideo/:id" component={WatchVideo} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
