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
import FortniteCoursePage from "./pages/FortniteCourse";
import RainbowCoursePage from "./pages/RainbowCourse";
import SignUpPage from "./pages/SignUp";
import SocialPage from "./pages/Social";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile/Profile";
import FeedPage from "./pages/Feed/Feed";
import PostPage from "./pages/Feed/PostPage";
import ChatPage from "./pages/Chat";
import DashBoardPage from "./pages/adminDashboard";
import ScrimPage from "./pages/Scrims";


// Components

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/statistics' exact component={StaticsticsPage} />
          <Route path='/patches' component={PatchesPage} />
          <Route path='/courses' exact component={CoursesPage} />
          <Route path='/sensitivityconverter' component={SensitivityConverterPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/social' exact component={SocialPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/dashboard' component={DashBoardPage} />
          <Route path='/scrims' component={ScrimPage} />
                {/*Pages with 2 slashes*/}
          <Route path='/statistics/rainbowsixseige' component={RainbowSixSeigeStatisticsPage} />
          <Route path='/courses/rainbowsixseige' component={RainbowCoursePage} />
          <Route path='/statistics/fortnite' component={FortniteStatisticsPage} />
          <Route path='/courses/fortnite' component={FortniteCoursePage} />
          <Route path='/profile/user/:id' exact component={ProfilePage} />
          <Route path='/profile/feed' component={FeedPage} />
          <Route path ='/posts/:id' component={PostPage} />
          <Route path = '/chat/:id' component={ChatPage} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
