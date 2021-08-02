// Libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import HomePage from "./pages/Home";
import StaticsticsPage from './pages/Statistics'
import PatchesPage from "./pages/Patches";
import CoursesPage from "./pages/Courses";
import SensitivityConverterPage from "./pages/SensitivityConverter";

// Components

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/statistics' component={StaticsticsPage} />
          <Route path='/patches' component={PatchesPage} />
          <Route path='/courses' component={CoursesPage} />
          <Route path='/sensitivityconverter' component={SensitivityConverterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
