// Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Transition } from "@headlessui/react";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LinearImageSection from "../../components/LinearImageSection/LinearImageSection";
import FortniteStatisticsCard from "./FortniteStatisticsCards";

// Image
import fortniteStatImage from "../../images/fortnite_statistics_final.jpg";

// Button
import { defaultButtonStyles } from "../../components/Button/Button";

// Utils
import {
  linearImageHeadingClasses,
  paragraphClasses,
  inputClasses,
  secondaryHeadingClasses,
} from "../../utils/combinedClasses";
import RenderError from "./RenderError";
import { baseUrl } from "../../utils/backendUrl";

const FortniteStatisticsPage = () => {
  const [userName, setUserName] = useState("");
  const [option, setOption] = useState("");
  const [fortniteStats, setFortniteStats] = useState(null);
  const [isActiveSpinner, setIsActiveSpinner] = useState(false);
  const [showError, setShowError] = useState(false);

  const fetchStats = async (userName, platform) => {
    setShowError(false);

    try {
      setFortniteStats(null);
      setIsActiveSpinner(true);

      const { data } = await axios.get(
        `${baseUrl}/api/statistics/fortnite`,
        { userName: userName },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(data);
      const stats = data;
      setUserName("");
      if (!stats) {
        return setShowError(true);
      }
      setFortniteStats(stats);
      setIsActiveSpinner(false);
    } catch (error) {
      alert(error);
      setIsActiveSpinner(false);
      setShowError(true);
    }
  };

  useEffect(() => {
    // console.log(fortniteStats);
  }, [fortniteStats]);
  const handleClick = () => {
    if (!userName) return alert("Enter The In-Game-Name");
    if (!option) return alert("Select A platform");

    fetchStats(userName, option);
  };

  return (
    <div className="">
      <Header />
      <LinearImageSection imageUrl={fortniteStatImage}>
        <h1 className={linearImageHeadingClasses}>Fortnite Statistics</h1>
      </LinearImageSection>

      <div className="flex items-center justify-center">
        <div className="p-2 flex flex-col items-center justify-center">
          <p className={paragraphClasses}>Enter Your In-Game Name</p>
          <div className="mt-4 space-x-4 flex px-4">
            <input
              value={userName}
              className={`h-10 w-44  ${inputClasses}`}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button
              className={defaultButtonStyles}
              onClick={() => handleClick()}
            >
              Check
            </button>
          </div>
          {/*Radio Buttons xD*/}
          <div className="Radio Buttons flex space-x-6 mt-5">
            <div className="flex items-center justify-center">
              <input
                onChange={(event) => setOption(event.target.value)}
                id="pc"
                type="radio"
                name="option"
                value="pc"
                className="hidden"
              />
              <label
                htmlFor="pc"
                className="flex text-greyText items-center cursor-pointer"
              >
                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-primary"></span>
                PC
              </label>
            </div>
            <div className="flex items-center justify-center">
              <input
                onChange={(event) => setOption(event.target.value)}
                id="ps4"
                type="radio"
                name="option"
                value="ps4"
                className="hidden"
              />
              <label
                htmlFor="ps4"
                className="flex text-greyText items-center cursor-pointer"
              >
                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-primary"></span>
                PS4
              </label>
            </div>

            <div className="flex items-center justify-center">
              <input
                onChange={(event) => setOption(event.target.value)}
                id="xbox"
                type="radio"
                name="option"
                value="xbox"
                className="hidden"
              />
              <label
                htmlFor="xbox"
                className="flex text-greyText items-center cursor-pointer"
              >
                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-primary"></span>
                XBOX
              </label>
            </div>
          </div>
        </div>
      </div>

      {isActiveSpinner ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader
            visible={isActiveSpinner}
            style={{ margin: "auto" }}
            type="MutatingDots"
            secondaryColor="#d31c3e"
            color="#D31C3E"
            height={100}
            width={100}
          />
        </div>
      ) : null}

      {/*Actuall Statistics Work!*/}

      {fortniteStats ? (
        <Transition
          show
          enter="transition-all ease-in-out duration-700 transform"
          enterFrom="opacity-0 translate-y-full"
          enterTo="translate-y-0 opacity-100"
          leave="transition-all ease-in-out duration-700 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-full"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className={`mt-10 mb-10 ${secondaryHeadingClasses}`}>
            </h1>
            <div className="flex flex-wrap justify-center items-center">
              <FortniteStatisticsCard title="Duo" />
              <FortniteStatisticsCard title="Solo" />
              <FortniteStatisticsCard title="Trio" />
              <FortniteStatisticsCard title="Overall" />
            </div>
          </div>
        </Transition>
      ) : null}

      {/*If there was an error*/}

      {showError ? (
        <div className="p-5">
          <RenderError />
        </div>
      ) : null}

      <Footer />
    </div>
  );
};

export default FortniteStatisticsPage;
