// Libraries
import React, { useState } from "react";
// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// Dashboard Things
import DashboardHome from "./dashboard/dashboardHome";
import DashboardUser from "./dashboard/dashboardUser";
import DashboardPost from "./dashboard/dashboardPost";
import DashboardReport from "./dashboard/dashboardReport";
import DashboardAddPatch from "./dashboard/dashboardAddPatch";

const DashBoardPage = () => {
  const [renderComponent, setRenderComponent] = useState("home");
  return (
    <div className="dashBoardPage">
      <Header />
      <div className="main flex items-center justify-center p-5 space-x-24">
        <div className="bg-primary-light py-20 text-center rounded-xl p-20">
          <div className="flex flex-col space-y-10">
            <div
              onClick={() => setRenderComponent("home")}
              className="item  font-medium text-xl hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105 text-greyText"
            >
              Home
            </div>
            <div
              onClick={() => setRenderComponent("user")}
              className="item font-medium text-xl hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105 text-greyText"
            >
              Users
            </div>
            <div
              onClick={() => setRenderComponent("post")}
              className="item font-medium text-xl hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105 text-greyText"
            >
              Posts
            </div>
            <div
              onClick={() => setRenderComponent("report")}
              className="item font-medium text-xl hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105 text-greyText"
            >
              Reported Posts
            </div>
            <div
              onClick={() => setRenderComponent("addpatches")}
              className="item font-medium text-xl hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105 text-greyText"
            >
              Add Patches
            </div>
          </div>
        </div>
        <div
          className="rounded-2xl "
        >
        { renderComponent === 'home' ? <DashboardHome /> : null }
        { renderComponent === 'user' ?  <DashboardUser /> : null }
        { renderComponent === 'post' ? <DashboardPost /> : null }
        { renderComponent === 'report' ? <DashboardReport /> : null }
        { renderComponent === 'addpatches' ? <DashboardAddPatch /> : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoardPage;
