// Libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Pages
import HomePage from "./pages/Home";
import Staticstics from './pages/Statistics'

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/statistics' component={Staticstics} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
