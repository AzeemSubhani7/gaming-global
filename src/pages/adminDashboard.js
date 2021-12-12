// Libraries
import React from 'react';
// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const DashBoardPage = () => {
  return(
    <div className='dashBoardPage'>
      <Header />
        <div className='main'>
            DashBoard Page
        </div>
      <Footer />
    </div>
  )
}

export default DashBoardPage;