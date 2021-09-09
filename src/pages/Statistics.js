// Libraries
import React, { useEffect } from "react";
import { ArrowSmRightIcon } from '@heroicons/react/solid'
import { Link } from "react-router-dom";

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LinearImageSection from "../components/LinearImageSection/LinearImageSection";

// Images
import inGameStatisticsImage from "../images/in_game_statistics_2.jpg"

// Utilities
import { linearImageHeadingClasses, secondaryHeadingClasses  } from '../utils/combinedClasses'


const StatisticsPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <div>
      <Header />
      <LinearImageSection imageUrl={inGameStatisticsImage}>
        <h1 className={linearImageHeadingClasses}>In Game Statistics</h1>
      </LinearImageSection>
      <div className="flex justify-center mt-5 items-center">
          <div className="headings p-7">
            <h1 className={secondaryHeadingClasses}>
              We provide in-game stats of these games
            </h1>
            <p className="text-greyText text-center mt-5">
              we will provide his statistics like total kills by a player, total deaths kill over death ratio,<br />
              total wins and losses of that player, total playing hours and his current rank. 
            </p>
            <Link to="/statistics/rainbowsixseige" className=" flex hover:text-secondary cursor-pointer transform hover:scale-110 transition-all duration-300 justify-center items-center text-center text-greyText mt-5"><ArrowSmRightIcon className="h-5 w-5 mr-3" /><p className="inline-block">Rainbow Six Seige</p></Link>
            <Link to="/statistics/fortnite" className=" flex hover:text-secondary cursor-pointer transform hover:scale-110 transition-all duration-300 justify-center items-center text-center text-greyText mt-1"><ArrowSmRightIcon className="h-5 w-5 mr-3" /><p className="inline-block">Fortnite</p></Link>
          </div>
          <div>

          </div>
      </div>
      <Footer />
    </div>
  );
};

export default StatisticsPage;
