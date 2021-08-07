// Libraries
import React from 'react'

// Utils
import { secondaryHeadingClasses } from '../../utils/combinedClasses';

const RenderError = () => {
  return(
    <div className="p-10 bg-primary-light rounded-lg">
      <h1 
      className='text-xl text-center text-opacity-75 text-secondary'
      >Oops! These is an Error while Fetching the Statistics.</h1>
    </div>
  )
}

export default RenderError;