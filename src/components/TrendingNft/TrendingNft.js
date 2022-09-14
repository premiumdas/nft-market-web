import React from 'react';
import Slider from 'react-slick/lib/slider';
import "./TrendingNft.css";
import { TRENDING_NFTS } from "../../data/trendingNfts";
import TrendingCard from "./TrendingCard/TrendingCard";
import Button from "../../common/Button/Button";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  speed: 500,
  arrows: false,
};

const TrendingNft = () => {
  return (
    <div className='trending-nfts'>
      <div className='tn-title absolute-center'>
        <span className='header-gradient'>Trending NFTs</span>
      </div>
      <div className='tn-bg-blob'></div>

      <Slider {...settings}>
        {TRENDING_NFTS.map((_nft)=> (
          <TrendingCard nft={_nft}/>
        ))}
      </Slider>
      <div className='tn-btn absolute-center'>
        <Button btnText='SEE MORE' type='Secondary' customClass='seemore-btn'></Button>
      </div>
    </div>
  )
}

export default TrendingNft