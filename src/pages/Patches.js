// Libraries
import React from "react";

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// Utilities
import { Link } from "react-router-dom";
import LinearImageSection from "../components/LinearImageSection/LinearImageSection";
import { secondaryHeadingClasses } from "../utils/combinedClasses";
import { ArrowSmRightIcon } from "@heroicons/react/solid";
import { linearImageHeadingClasses } from "../utils/combinedClasses";
import PatchesImage from "../images/signUp_BG_optimized.jpg"

const PatchesPage = () => {
  return (
    <div>
      <Header />
      <LinearImageSection imageUrl={PatchesImage}>
        <h1 className={linearImageHeadingClasses}>Latest News and Updates</h1>
      </LinearImageSection>
      <div className="flex justify-center mt-5 items-center">
        <div className="headings p-7">
          <h1 className={secondaryHeadingClasses}>
            We provide Upcoming Updates of these Games
          </h1>
          <p className="text-greyText text-center mt-5">
            We'll provide you the latests news and patches about these games. So, you can
            stay updated and get to know about all the nerfs and buffs coming in this game.
            <br />
            Click on below to know about the latest updates about these games.
          </p>
          <Link
            to="/patches/rainbowsixseige"
            className=" flex hover:text-secondary cursor-pointer transform hover:scale-110 transition-all duration-300 justify-center items-center text-center text-greyText mt-5"
          >
            <ArrowSmRightIcon className="h-5 w-5 mr-3" />
            <p className="inline-block">Rainbow Six Seige</p>
          </Link>
          <Link
            to="/patches/fortnite"
            className=" flex hover:text-secondary cursor-pointer transform hover:scale-110 transition-all duration-300 justify-center items-center text-center text-greyText mt-1"
          >
            <ArrowSmRightIcon className="h-5 w-5 mr-3" />
            <p className="inline-block">Fortnite</p>
          </Link>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default PatchesPage;
