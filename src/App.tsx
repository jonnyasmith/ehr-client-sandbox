import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSS_RESET } from "@ltht-react/styles";

import HomePage from "./pages/HomePage";
import SplitView from "./pages/SplitView";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <div css={CSS_RESET}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/split-view">
            <SplitView />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
