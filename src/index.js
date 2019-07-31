import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FriendDetail from "./friend-detail";
import FriendsList from "./friends-list";
import NoMatch from "./NoMatch";

import "./main.css";

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={FriendsList} />
              <Route path="/friend/:slug" component={FriendDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-wrapper"));
