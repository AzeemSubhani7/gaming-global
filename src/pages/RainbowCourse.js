// Libraries
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import YouTube from "react-youtube";
// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RainbowCoursePage = () => {
  const opt = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="Rainbow Course Page">
      <Header />
      <div className="main">
        <div className=" px-4 pt-16">
          <div className="mx-auto bg-primary-light rounded-2xl p-20">
            <p className="my-8 text-2xl text-greyText">
              {" "}
              Basic Introduction and Recoil Managemnt
            </p>

            {/*First Lesson Starts*/}
            <Disclosure>
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                      py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                    hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                      focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>What is Rainbow Six Seige?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <p className="text-xl text-center p-8">
                        What is Rainbow Six Siege? At its heart, Rainbow Six
                        Siege is a high-precision, <br /> tactical shooter that
                        prioritises careful planning teamwork and finely tuned
                        tactical play.
                      </p>
                      <div>
                        <YouTube videoId="FLMxhmjY-B4" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*First Lesson ends*/}

            {/*Second Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                  py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                  focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">
                      Recoil mechanism and Attachments Guide
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <p className="text-xl leading-9 p-8">
                        You can use attachments, <br /> which are NOW free
                        shoutout to all the people who bought attachments.
                        <br />
                        Sights: Use the one you prefer. <br />
                        Holo, Reflex and Red Dot are often used on guns with
                        high recoil since the
                        <br /> recoil doesn’t kick back as hard compared to
                        using an ACOG.
                        <br />
                        Muzzle Brake: Decreases upwards recoil.
                        <br />
                        Compensator: Reduces sideways recoil.
                        <br />
                        Vertical Grip: Decreases upwards recoil.
                        <br />
                        Adjust your vertical sensitivity might help.
                        <br />
                      </p>
                      <div>
                        <YouTube videoId="w-GLZFseTSg" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*Second Lesson ends*/}

            {/*Third Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">The Ultimate Grip Guide</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <p className="text-xl leading-9 p-8">
                        You can use Both Vertial and Angle its a matter of
                        choice
                        <br />
                        Angle Grip: ADS time is reduced but it has higher recoil{" "}
                        <br />
                        Vertical Grip: Decreases upwards recoil.
                        <br />
                        Adjust your vertical sensitivity might help.
                        <br />
                      </p>
                      <div>
                        <YouTube videoId="slTW597T2eE" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*Second Lesson ends*/}

            <p className="my-8 text-2xl text-greyText"> Map Guides</p>

            {/*Fourth Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Map - 1 House</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="u3SQ4xWiLuU" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*Fourth Lesson ends*/}

            {/*Fifth Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Map - 2 The Oregon</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="XOepBwk3Nvk" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*Fifth Lesson ends*/}

            {/*sixth Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Map - 3 Kanal Reworked</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="9MyMGNJXhS8" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*sixth Lesson ends*/}

            {/*seven Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Map - 4 Coastline</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="XRfUXeMsJ14" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*seven Lesson ends*/}

            {/*Eight Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Map - 5 Consulate</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="y6G--GO0qpQ" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*Eight Lesson ends*/}

            {/*Nine Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Map - 5 Villa</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="WLktRsFAG-g" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*Nine Lesson ends*/}

            {/*10 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Map - 6 Kafe Dostovesky</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="mZcMXVDZDPU" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*10 Lesson ends*/}

            {/*11 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Map - 7 Club House</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="CJxHQMG2dU0" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*11 Lesson ends*/}

            <p className="my-8 text-2xl text-greyText">The Operator Guide</p>

            {/*12 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 1 Osa </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="h5JjPBI5pBY" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*12 Lesson ends*/}

            {/*13 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 2 ThunderBird</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="Kl8WPM-isd0" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*13 Lesson ends*/}

            {/*14 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 3 Flores</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="rnE-m2n-65c" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*14 Lesson ends*/}

            {/*15 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 4 Aruni</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="h70LlKJAL_0" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*15 Lesson ends*/}

            {/*16 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 5 Zero</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="Z13vQfsj2eQ" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*16 Lesson ends*/}

            {/*17 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 6 Melusi</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="Kq0En9EE_dk" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*17 Lesson ends*/}

            {/*18 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 7 Ace</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="VWowxmmmGZY" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*18 Lesson ends*/}

            {/*19 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 8 Oryx</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="QOmQjnkWmvc" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*19 Lesson ends*/}

            {/*20 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 9 Lana</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="whn_1MDLsHs" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*20 Lesson ends*/}

            {/*21 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 10 Thather</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="J6RAQD56Pns" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*21 Lesson ends*/}

            {/*22 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 11 Tachanka</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="O7EcFXaJnAU" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*22 Lesson ends*/}

            {/*23 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 12 Lesion</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="4-lo0TBr82A" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*23 Lesson ends*/}

            {/*24 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 13 Lion</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="V_Hk-I4p7RU" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*24 Lesson ends*/}

            {/*25 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 14 Jager</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="yYoSObGBxUg" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*25 Lesson ends*/}

            {/*26 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 15  Fuse</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="WoSS7NQobQU" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*26 Lesson ends*/}

            {/*27 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 16 Clash</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="2hEWiOkL9dg" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*27 Lesson ends*/}

            {/*28 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 17 Glaz</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="JoymXFguSfs" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*28 Lesson ends*/}
            {/*28 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 18 Ash</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="sG4c0we2WEY" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*28 Lesson ends*/}
            {/*29 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 19 Pulse</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="Nsv8dE_DQas" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*29 Lesson ends*/}
            {/*30 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 20 Kali</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="d_M7HvlTdhg" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*30 Lesson ends*/}

            {/*31 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 21 Wamai</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="JhcLcSvJseY" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*31 Lesson ends*/}
            {/*32 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 22 Maverick</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="Fy76ofsxSS0" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*32 Lesson ends*/}
            {/*33 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 23 Hibana</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="Afftufm5hLE" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*33 Lesson ends*/}
            {/*34 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 24 Amaru</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="1yEGh-8kHL4" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*34 Lesson ends*/}
            {/*35 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 25 Goyo</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="8IMlgXEoAOM" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*35 Lesson ends*/}
            {/*36 lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="text-center">Operator - 26 Bandith</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      
                      <div>
                        <YouTube videoId="tPbTkwsNGc0" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*36 Lesson ends*/}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RainbowCoursePage;
