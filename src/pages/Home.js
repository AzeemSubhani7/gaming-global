// Libraries
import React from 'react';

// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return(
    <div>
      <Header />
      <div className="text-white text-xl">Hey its Home Page</div>
      <Footer />
    </div>
  )
}

export default HomePage;