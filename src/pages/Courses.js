// Libraries
import React, { useEffect } from "react";
import { ArrowSmRightIcon } from '@heroicons/react/solid'
import { Link } from "react-router-dom";

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LinearImageSection from "../components/LinearImageSection/LinearImageSection";

// Images
import coursesPageImage from "../images/course_page_new-min.jpg"

// Utilities
import { linearImageHeadingClasses, secondaryHeadingClasses  } from '../utils/combinedClasses'


const CoursesPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <div>
      <Header />
      <LinearImageSection imageUrl={coursesPageImage}>
        <h1 className={linearImageHeadingClasses}>Improve Your Game</h1>
      </LinearImageSection>
      <div className="flex justify-center mt-5 items-center">
          <div className="headings p-7">
            <h1 className={secondaryHeadingClasses}>
              We provide improvements of these games
            </h1>
            <p className="text-greyText text-center mt-5">
              We've collected data and made a course out of it. So, you can improve your basics as well as game sense as you grow in the game and hit the highest possible rank.<br />
              total wins and losses of that player, total playing hours and his current rank. 
            </p>
            <Link to="/courses/rainbowsixseige" className=" flex hover:text-secondary cursor-pointer transform hover:scale-110 transition-all duration-300 justify-center items-center text-center text-greyText mt-5"><ArrowSmRightIcon className="h-5 w-5 mr-3" /><p className="inline-block">Rainbow Six Seige</p></Link>
            <Link to="/courses/fortnite" className=" flex hover:text-secondary cursor-pointer transform hover:scale-110 transition-all duration-300 justify-center items-center text-center text-greyText mt-1"><ArrowSmRightIcon className="h-5 w-5 mr-3" /><p className="inline-block">Fortnite</p></Link>
          </div>
          <div>

          </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
