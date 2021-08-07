// b835a80e-2593-4adc-9800-d8b15622cd83
// Libraries
import React from "react";
import { Transition } from "@headlessui/react";

// Components
import StatisticsCard from "./StatisticsCard";
import RenderError from "./RenderError";

const FetchRainbowSixStats = ({ stats, error }) => {
  if (error) {
    return (
      <div className="p-10">
        <RenderError />
      </div>
    );
  }

  return (
    
      <Transition
        show
        enter="transition-all ease-in-out duration-700 transform"
        enterFrom="opacity-0 translate-y-full"
        enterTo="translate-y-0 opacity-100"
        leave="transition-all ease-in-out duration-700 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-full"
      >
      <div className="flex flex-col items-center space-y-3 justify-center overflow-hidden">
        <div className="flex p-4 sm:p-10 space-x-5 bg-primary-light rounded-xl">
          <div className="flex items-center space-x-4">
            <img
              src={stats.avatar_url_256}
              alt="User's Ubisoft profile avatar"
              className="h-10 w-10 sm:h-20 sm:w-20 rounded-full"
            />
            <h1 className="text-greyText text-sm sm:text-lg">
              {stats.username}
            </h1>
          </div>
          <div className="flex items-center flex-col space-y-4 sm:space-y-0 sm:flex-row justify-center  sm:space-x-4">
            <div className="flex flex-col sm:p-5 divide-y-2 divide-secondary items-center">
              <div className="text-greyText text-sm sm:text-md">WINS</div>
              <div className="text-greyText text-sm sm:text-md">
                {stats.stats.general.wins}
              </div>
            </div>
            <div className="flex flex-col items-center divide-y-2 divide-secondary sm:p-5">
              <div className="text-greyText text-sm sm:text-md">KD</div>
              <div className="text-greyText text-sm sm:text-md">
                {stats.stats.general.kd.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        {/*First Box General*/}
        <div className="flex flex-wrap item justify-center">
          <StatisticsCard
            title="General"
            kills={stats.stats.general.kills}
            wins={stats.stats.general.wins}
            deaths={stats.stats.general.deaths}
            kd={stats.stats.general.kd}
            matches={stats.stats.general.games_played}
            losses={stats.stats.general.losses}
          />
          {/*Second Ranked Box*/}
          <StatisticsCard
            title="Ranked"
            kills={stats.stats.queue.ranked.kills}
            wins={stats.stats.queue.ranked.wins}
            deaths={stats.stats.queue.ranked.deaths}
            kd={stats.stats.queue.ranked.kd}
            matches={stats.stats.queue.ranked.games_played}
            losses={stats.stats.queue.ranked.losses}
          />
          {/*Third Box Casual*/}
          <StatisticsCard
            title="Casual"
            kills={stats.stats.queue.casual.kills}
            wins={stats.stats.queue.casual.wins}
            deaths={stats.stats.queue.casual.deaths}
            kd={stats.stats.queue.casual.kd}
            matches={stats.stats.queue.casual.games_played}
            losses={stats.stats.queue.casual.losses}
          />
        </div>
        </div>
      </Transition>
    
  );
};

export default FetchRainbowSixStats;
