// Libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import HomePage from "./pages/Home";
import StaticsticsPage from './pages/Statistics'
import PatchesPage from "./pages/Patches";
import CoursesPage from "./pages/Courses";
import SensitivityConverterPage from "./pages/SensitivityConverter";
import RainbowSixSeigeStatisticsPage from "./pages/Statistics/RainbowSixSeigeStatistics";
import FortniteStatisticsPage from "./pages/Statistics/FortniteStatistics";

// Components

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/statistics' exact component={StaticsticsPage} />
          <Route path='/patches' component={PatchesPage} />
          <Route path='/courses' component={CoursesPage} />
          <Route path='/sensitivityconverter' component={SensitivityConverterPage} />
                {/*Pages with 2 slashes*/}
          <Route path='/statistics/rainbowsixseige' component={RainbowSixSeigeStatisticsPage} />
          <Route path='/statistics/fortnite' component={FortniteStatisticsPage} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
