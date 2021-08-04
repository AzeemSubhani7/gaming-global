// Libraries
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react"
import { XCircleIcon } from '@heroicons/react/outline'

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LinearImageSection from "../components/LinearImageSection/LinearImageSection";

// Styles
import { defaultButtonStyles } from "../components/Button/Button";

// Images
import sniperImage from "../images/sens_converter_sniper.jpg";

const SensitivityConverterPage = () => {

  // States for Converting Sensitivity form Rainbow Six Seige To Fortnite
  const [seigeToFortniteCurrent, setSeigeToFortniteCurrent] = useState("")
  const [seigeToFortniteDpi, setSeigeToFortniteDpi] = useState("")
  const [seigeToFortniteConverted, setSeigeToFortniteConverted] = useState(0)
  const [isSeigeConvertedShowing, setIsSeigeConvertedShowing] = useState(false)

  // States for Converting Sensitivity From Fortnite to Rainbow Six
  const [fortniteToSeigeCurrent, setFortniteToSeigeCurrent] = useState("")
  const [fortniteToSeigeDpi, setFortniteToSeigeDpi] = useState("")
  const [fortniteToSeigeConverted, setFortniteToSeigeConverted] = useState(0)
  const [isFortniteConvertedShowing, setIsFortniteConvertedShowing] = useState(false)


  // Functions For Converting Sensitivity From Rainbow Six Seige To Fortnite

  const handleSeigeToFortniteClick = () => {
    if(!seigeToFortniteCurrent) {
      return alert("Input your current sensitivity")
    }
    // If Everything is fine do the following to Convert The sensitivity from Seige to Fortnite
    if(!seigeToFortniteDpi) {
      setSeigeToFortniteDpi('400')
    }
    let parsedSeigeSensitivity = parseFloat(seigeToFortniteCurrent)
    parsedSeigeSensitivity = (parsedSeigeSensitivity * 1.031427).toFixed(2)
    console.log(parsedSeigeSensitivity)
    setSeigeToFortniteConverted(parsedSeigeSensitivity)
    setIsSeigeConvertedShowing(true)
  }

  const handleSeigeToFortniteDpiChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (re.test(e.target.value)) {
       return setSeigeToFortniteDpi(e.target.value)
    }
    setSeigeToFortniteDpi("")
    alert("Enter Valid DPI")
 }
  useEffect(() => {
    const checkInput = () => {
      let numbers = /^[0-9]+$/
      if(seigeToFortniteCurrent) {
        if(!numbers.test(seigeToFortniteCurrent)) {
          alert("invalid sensitivity value!")
          setSeigeToFortniteCurrent('')
        }
      }
    }
  
    checkInput();
  }, [seigeToFortniteCurrent])

  // Functions For Converting Sensitivity From Fortnite to Rainbow Six Seige

  const handleFortniteToSeigeCurrent = (event) => {

    setFortniteToSeigeCurrent(event.target.value)
  }

  const handleFortniteToSeigeDpi = (event) => {
    const regularExp = /^[0-9\b]+$/;
    if(regularExp.test(event.target.value)) {
      return setFortniteToSeigeDpi(event.target.value)
    }
    setFortniteToSeigeDpi("")
    alert("Enter Valid DPI")
  }

  const handleFortniteToSeigeClick = () => {
    if(!fortniteToSeigeCurrent) {
      return alert("Input your current Sensitivity")
    }
    // If Everything is File then do the following to convert the sensitivity
    // from Fortnite to Rainbow Six Seige
    console.log("EveryThing is Fine")
    if(!fortniteToSeigeDpi) {
      setFortniteToSeigeDpi('400')
    }
    let regularExp = /^\d+(\.\d{1,2})?$/;
    if(!regularExp.test(fortniteToSeigeCurrent)) {
      alert("Enter a valid Sensitivity")
      return setFortniteToSeigeCurrent('')
    }

    let parsedFortniteSensitivity = parseFloat(fortniteToSeigeCurrent)
    parsedFortniteSensitivity = (parsedFortniteSensitivity / 1.031427).toFixed(2)
    setFortniteToSeigeConverted(parsedFortniteSensitivity)
    setIsFortniteConvertedShowing(true)
  }

  return (
    <div>
      <Header />
      <LinearImageSection imageUrl={sniperImage}>
        <h1 className="text-center mt-5 md:mt-10 font-bold text-2xl md:text-3xl lg:text-5xl text-gray-200">
          Sensitivity Converter
        </h1>
      </LinearImageSection>
      <div className="flex justify-evenly flex-col md:flex-row mt-10">
        <div className="Rainbow Converter p-5">
          <h1 className="text-center mt-5 md:mt-10 font-semibold text-xl sm:text-2xl  text-gray-200">
            Seige To Fortnite
          </h1>
          <div className="flex items-center flex-col lg:flex-row space-y-5 justify-evenly bg-primary-light p-10 rounded-2xl lg:space-y-0 lg:space-x-5 mt-10">
            <input
              name='seigeToFortniteCurrent'
              value={seigeToFortniteCurrent}
              onChange={(e) => setSeigeToFortniteCurrent(e.target.value)}
              placeholder="Current Sensitivity"
              className="bg-inputBg h-9 w-60 rounded-3xl outline-none p-4 placeholder-greyPlaceholder text-greyText text-sm"
            />
            <input
              name="seigeToFortniteDpi"
              onChange={handleSeigeToFortniteDpiChange}
              value={seigeToFortniteDpi}
              placeholder="DPI"
              className="bg-inputBg text-center h-9 w-20 rounded-3xl outline-none p-4 placeholder-greyPlaceholder text-greyText text-sm"
            />
            <button
              onClick={() => handleSeigeToFortniteClick()}
              className={defaultButtonStyles}>Convert</button>
          </div>
          <Transition
          show={isSeigeConvertedShowing}
          enter="transition-all ease-in-out duration-700 transform"
          enterFrom='opacity-0 translate-y-full'
          enterTo='translate-y-0 opacity-100'
          leave='transition-all ease-in-out duration-700 transform'
          leaveFrom="opacity-100 translate-y-0"
          leaveTo='opacity-0 translate-y-full'
          >
            <div className="bg-primary-light relative text-center mt-10 rounded-2xl py-5 px-10 text-greyText">
            <XCircleIcon 
            onClick={() => setIsSeigeConvertedShowing(false)}
            style={{ top: '10px', right: '10px' }}
            className="h-5 w-5 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary" />
                <p className="">
                  Your Converted Sensitivity from Rainbow Six Seige to <br /> Fortnite with {seigeToFortniteDpi} DPI is: <span className="font-bold text-gray-200 italic">{seigeToFortniteConverted}</span>
                </p>
            </div>
          </Transition>
        </div>
        
        <div className="Fortnite Converter p-5">
          <h1 className="text-center mt-5 md:mt-10 font-semibold text-xl sm:text-2xl  text-gray-200">
            Fortnite to Seige
          </h1>
          <div className="flex items-center flex-col space-y-5 lg:flex-row bg-primary-light p-10 rounded-2xl lg:space-y-0 justify-evenly lg:space-x-5 mt-10">
            <input
              name='fortniteToSeigeCurrent'
              value={fortniteToSeigeCurrent}
              onChange={handleFortniteToSeigeCurrent}
              placeholder="Current Sensitivity"
              className="bg-inputBg h-9 w-60 rounded-3xl outline-none p-4 placeholder-greyPlaceholder text-greyText text-sm"
            />
            <input
              name="fortniteToSeigeDpi"
              value={fortniteToSeigeDpi}
              onChange={handleFortniteToSeigeDpi}
              placeholder="DPI"
              className="bg-inputBg text-center h-9 w-20 rounded-3xl outline-none p-4 placeholder-greyPlaceholder text-greyText text-sm"
            />
            <button 
            onClick={handleFortniteToSeigeClick }
            className={defaultButtonStyles}>Convert</button>
          </div>
          <Transition
          show={isFortniteConvertedShowing}
          enter='transition-all ease-in-out duration-700 transform'
          enterFrom='opacity-0 translate-y-full'
          enterTo='translate-y-0 opacity-100'
          leave="transition-all ease-in-out duration-700 transform"
          leaveFrom='opacity-100 translate-y-0'
          leaveTo="opacity-0 translate-y-full"
          >
            <div className="bg-primary-light relative text-center mt-10 rounded-2xl py-5 px-10 text-greyText">
              <XCircleIcon 
              onClick={() => setIsFortniteConvertedShowing(false)}
              style={{ top: '10px', right: '10px' }}
              className="h-5 w-5 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary" />
                <p className="">
                  Your Converted Sensitivity from Fortnite to <br /> Rainbow Six Seige with {fortniteToSeigeDpi} DPI is: <span className="font-bold text-gray-200 italic">{fortniteToSeigeConverted}</span>
                </p>
            </div>
          </Transition>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SensitivityConverterPage;
