// Libraries
import React from 'react'

// Components
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

// Images
import SignUpBackgroundImage from '../images/signUp_BG_optimized.jpg'

const mainSectionStyles = {

}

const SignUpPage = () => {
  return(
    <div>
      <Header />
      <div className="p-5" style={{ height: '90vh', position: 'relative' }} >
        <div className='rounded-xl' style={{ height: '90vh', width: '100%', backgroundImage: `url(${SignUpBackgroundImage})`, filter: 'blur(10px)', position: 'absolute', top: '10px', left: '10px' }} >
        
        </div>
        <div className='z-10 relative'>
          <h1 className='text-center text-white text-4xl'>Hello</h1>
        </div>    
      </div>
      <div className='mt-10'>
      <Footer />
      </div>
    </div>
  )
}

export default SignUpPage;