// Libraries
import React, { useState } from "react";
import axios from "axios";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LinearImageSection from "../../components/LinearImageSection/LinearImageSection";

// ImageUrl
import rainbowSixSeigeStatsImage from "../../images/rainbow_six_seige_statistics.jpg";

// Utiitites
import {
  linearImageHeadingClasses,
  paragraphClasses,
  inputClasses,
} from "../../utils/combinedClasses";
import { defaultButtonStyles } from "../../components/Button/Button";
import FetchRainbowSixStats from "./FetchRainbowSixStats";



const RainbowSixSeigeStatisticsPage = () => {
  const [userName, setUserName] = useState("");
  const [option, setOption] = useState("");

  const [isActive, setIsActive] = useState(false);

  const [statistics, setStatistics] = useState(null);

  const fetchStats = async (userName, option) => {
    try {
      const { data } = await axios.get(
        `https://api2.r6stats.com/public-api/stats/${userName}/${option}/generic`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_RAINBOW_SIX_API_KEY}`,
          },
        }
      );
      setStatistics(data);
    } catch (error) {
      setIsActive(true)
      setStatistics(null);
    }
  };

  const handleClick = () => {
    if (!userName) return alert("Enter The In-Game-Name");
    if (!option) return alert("Select A platform");


    fetchStats(userName, option);


    if (statistics) {
      setIsActive(true);
      return console.log(statistics)
    }
  };
  return (
    <div className="">
      <Header />
      <LinearImageSection imageUrl={rainbowSixSeigeStatsImage}>
        <h1 className={linearImageHeadingClasses}>
          Rainbow Six Seige Statistics
        </h1>
      </LinearImageSection>
      <div className="flex items-center justify-center">
        <div className="p-2 flex flex-col items-center justify-center">
          <p className={paragraphClasses}>Enter Your In-Game Name</p>
          <div className="mt-4 space-x-4 flex px-4">
            <input
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

      <div className="FetchStats mt-10">
        {isActive ? (
          <FetchRainbowSixStats stats={statistics} error={!statistics ? 'error' : null} />
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default RainbowSixSeigeStatisticsPage;
