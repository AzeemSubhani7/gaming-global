// Libraries
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import YouTube from "react-youtube";
// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const FortniteCoursePage = () => {
  const opt = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="Fortnite Course Page">
      <Header />
      <div className="main">
        <div className=" px-4 pt-16">
          <div className="mx-auto bg-primary-light rounded-2xl p-20">
            <p className="my-8 text-2xl text-greyText">Introduction</p>

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
                    <span>What is Fortnite?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="KCW5Hn58EM8" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*First Lesson ends*/}

            {/*2 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                      py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                    hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                      focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Fortnite StoryLine</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="JxqhqdpBRLA" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*2 Lesson ends*/}

            <p className="my-8 text-2xl text-greyText">
              Characters of Fortnite
            </p>

            {/*3 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                      py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                    hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                      focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>15 Most Important Characters of Fortnite</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="u_WbdQhzAbA" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*3 Lesson ends*/}

            <p className="my-8 text-2xl text-greyText">Tips to remember!</p>

            {/*4 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                      py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                    hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                      focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Chapter 3 Tips and Tricks</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="oRNcdNJp82U" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*4 Lesson ends*/}

            {/*5 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                      py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                    hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                      focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Tricks Everybody Need to Know</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="y8wXsW3MGg8" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*5 Lesson ends*/}

            {/*6 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>How to go pro!</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="wrmYZp4MN0c" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*6 Lesson ends*/}

            {/*7 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Common Mistakes People Make </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="KzDD3nb2MyU" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*7 Lesson ends*/}

            {/*8 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>How to Build and Edit</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="gkpomqd4KvA" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*8 Lesson ends*/}

            {/*9 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                                py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                              hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                                focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Smart and Dumb Edits</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="p1XHL_SsSww" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*9 Lesson ends*/}

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
                    <span>How to Build and Fight</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="6QmFO0uIrGU" opts={opt} />
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
                    <span>Advance Piece Control</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="3PAU7_x7leM" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*11 Lesson ends*/}

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
                    <span>How to Box Fighting</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="ddN95ugsNMk" opts={opt} />
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
                    <span>Master Your Landing</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="vvETIAeAlek" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*13 Lesson ends*/}
            <p className="my-8 text-2xl text-greyText">
              Things Everyone can use
            </p>
            {/*14 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                              py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                            hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                              focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>How to triple edit</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="nTw85dp_rSU" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*14 Lesson ends*/}

            {/*15 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                              py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                            hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                              focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Improve Shotgun Accuracy</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="vkxDyc41TnA" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*15 Lesson ends*/}

            {/*16 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                              py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                            hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                              focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>SideJumps Explained</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="ZHPbP0HSt6k" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*16 Lesson ends*/}

            {/*17 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                              py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                            hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                              focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Best Drills</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="dUA-GHnu6wk" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*17 Lesson ends*/}

            {/*18 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                              py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                            hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                              focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Offspawn fighting explained</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="E58Cu26tNZw" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*18 Lesson ends*/}
            {/*19 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                              py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                            hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                              focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>How not to be 3rd partied in a fight</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="xMfD02kiv1c" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*19 Lesson ends*/}
            <p className="my-8 text-2xl text-greyText">
            Fortnite Updates you need to know
          </p>
            {/*20 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                              py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                            hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                              focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Patch 13.40 changes</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="GACRp8cyAno" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*20 Lesson ends*/}
            {/*21 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                              py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                            hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                              focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Halloween update</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="v9YBSsmiQ0g" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*21 Lesson ends*/}
            {/*22 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                              py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                            hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                              focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Season 5 map and weapon changes</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="vLHtAHyxexk" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*22 Lesson ends*/}
            {/*23 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                              py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                            hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                              focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Updates in patch 15.20</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="W-RGYpsJcj8" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*23 Lesson ends*/}
            {/*24 Lesson Starts*/}
            <Disclosure className="mt-2">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className="flex justify-between w-full px-4 text-xl 
                              py-2 text-center font-medium text-greyText bg-primary-dark rounded-lg
                            hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring 
                              focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span>Vehicle updates</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-greyText">
                    <div className="flex justify-evenly items-center">
                      <div>
                        <YouTube videoId="qR9NuArJCL0" opts={opt} />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            {/*24 Lesson ends*/}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FortniteCoursePage;
