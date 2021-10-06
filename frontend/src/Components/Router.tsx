import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Introduction from "../Routes/Introduction";
import MyPage from "../Routes/Mypage";
import Report_First from "../Routes/Report_First";
import Report_Second from "../Routes/Report_Second";
import Result from "../Routes/Result";
import Test from "../Routes/Test";
import WatchVideo from "../Routes/WatchVideo";
import SignUp from "../Routes/SignUp";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/introduction" component={Introduction} />
        <Route exact path='/test' component={Test} />
        <Route path="/test/:detail" component={Test} />
        <Route exact path="/report/1" component={Report_First} />
        <Route exact path="/report/2" component={Report_Second} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/watchvideo" component={WatchVideo} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
