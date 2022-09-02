import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import TopFold from "./components/TopFold/TopFold";
import BrandInt from "./components/BrandInt/BrandInt";
import TrendingNft from "./components/TrendingNft/TrendingNft";
import InfoSection from "./components/InfoSection/InfoSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className='max-width'>
      <Header />
      <TopFold />
      <BrandInt />
      <TrendingNft />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default App