// Libraries
import React from 'react';

// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { defaultButtonStyles } from '../components/Button/Button'
import LinearImageSection from '../components/LinearImageSection/LinearImageSection';

// Images
import glazImage from '../images/glaz_sniper.png'
import rainbowSixSeige from '../images/r6_card.png'
import fortnite from '../images/fortnite_card.png'
 
// Texts
import { rainbowSixSeigeCardText } from '../utils/texts';
import { fortniteCardText } from '../utils/texts';

const HomePage = () => {
  return(
    <div>
      <Header />
      {/*HeroSection*/}
      <LinearImageSection imageUrl={glazImage}>
        <div className="">
          <h1 className='px-10 text-gray-200 text-center md:text-left sm:px-0 font-bold lg:font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl' > A gaming Experience <br></br>you nevet had<br></br>before</h1>
          <p
          className="text-greyText px-10 sm:px-0 mt-3 lg:mt-4 text-center md:text-left "
          >GamingGlobal is a web application where gamers can<br />find all necessary stuff under a single platform.</p>
          <div className="flex items-center justify-center md:justify-start mt-4 lg:mt-4"><button className={`outline-none ${defaultButtonStyles}`}>Latest Patches</button></div>
        </div>
      </LinearImageSection>
      {/*h-96woCardsSection*/}
      <div className="TwoCardsSecion mt-12 md:mt-2">
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-5xl text-gray-200">The Next Horizon Games</h1>
        <div className="cardss flex justify-evenly flex-wrap mt-6">
          <div className="card-1 w-80 m-10 rounded-xl bg-primary-light flex items-center flex-col transform transition-all duration-300 hover:scale-110 ">
            <img className="object-cover p-5  mt-4" alt="fortnite" style={{ height: '93px', width:'288px' }} src={rainbowSixSeige} />
            <p className="text-sm px-8 py-2 text-center text-greyText">{rainbowSixSeigeCardText}</p>
            <button className={`mt-4 mb-6 outline-none  ${defaultButtonStyles}`} >Learn Seige</button>
          </div>

          <div className="cards-2 w-80 m-10 rounded-xl bg-primary-light flex flex-col items-center  transform transition-all duration-300 hover:scale-110  ">
            <img className="object-cover p-3 mt-4" alt="fortnite" style={{ height: '93px', width:'268px' }} src={fortnite} />
            <p className="text-sm px-8 py-2 text-center text-greyText">{fortniteCardText}</p>
            <button className={`mt-4 mb-6 outline-none  ${defaultButtonStyles}`} >Learn Fortnite</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;