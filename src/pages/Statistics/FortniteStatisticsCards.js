import React from 'react'

const FortniteStatisticsCard = (props) => {
  return(
    <div className="flex flex-col p-5">
        <div className="text-xl font-bold mb-4 text-gray-200">{props.title}</div>
        <div className="bg-primary-light rounded-lg divide-secondary divide-y-2 p-5 sm:p-20">

          <div className="upper-box p-5 flex item-center space-x-10 justify-center ">

          <div className='flex flex-col items-center justify-center'>
            <div className="text-greyText text-sm sm:text-lg text-center">
                kills
            </div>
            <div className="text-greyText text-sm sm:text-lg text-center font-bold">
              {props.stats.kills ? props.stats.kills : 'no record' }
            </div>
          </div>

          <div className='flex flex-col items justify-center'>
            <div className="text-greyText text-sm sm:text-lg text-center">wins</div>
            <div className="text-greyText text-sm sm:text-lg text-center font-bold">{props.stats.wins ? props.stats.wins : 'no record'}</div>
          </div>

          <div className='flex flex-col items justify-center'>
            <div className="text-greyText text-sm sm:text-lg text-center">deaths</div>
            <div className="text-greyText text-sm sm:text-lg text-center font-bold">{props.stats.deaths ? props.stats.deaths : 'no record'}</div>
          </div>

          </div>

          <div className="lower-box h-11 p-5 flex pt-10 items-center space-x-10 justify-center">
            
          <div className='flex flex-col items-center justify-center space-x-4'>
          <div className="text-greyText text-sm sm:text-lg text-center">KD</div>
          <div className="text-greyText text-sm sm:text-lg text-center font-bold">{props.stats.kd ? props.stats.kd : 'no record'}</div>
        </div>

        <div className='flex flex-col items justify-center'>
          <div className="text-greyText text-sm sm:text-lg text-center">Matches</div>
          <div className="text-greyText text-sm sm:text-lg text-center font-bold">{props.stats.matches ? props.stats.matches : 'no record'}</div>
        </div>

        <div className='flex flex-col items justify-center'>
          <div className="text-greyText text-sm sm:text-lg text-center">Kill Per Match</div>
          <div className="text-greyText text-sm sm:text-lg text-center font-bold">{props.stats.killsPerMatch ? props.stats.killsPerMatch : 'no record'}</div>
        </div>

          </div>
        </div>
      </div>
  )
}

export default FortniteStatisticsCard