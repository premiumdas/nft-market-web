import React from 'react';
import Button from '../../common/Button/Button';
import "./TopFold.css";

const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
      <div className='tf-left'>
        <div className='tf-heading'>
          Discover, collect & sell{" "} 
          <span className='header-gradient'>
            Extraordinary
          </span> NFTs
        </div>
        <div className='tf-description'>
          some description abt nfts blah blah blah
        </div>
        <div className='tf-left-btns'>
            <Button btnType="PRIMARY" btnText="EXPLORE" />
            <Button btnType="SECONDARY" btnText="CREATE" customClass='tf-left-secondary-btn'/>
        </div>
        <div className='tf-left-infoStats'>
          <div className='tf-left-infoItem absolute-center'>
            <div className='tf-infoItem-count'>180K+</div>
            <div className='tf-infoItem-label'>Collections</div>
          </div>
          <div className='tf-left-infoItem absolute-center'>
            <div className='tf-infoItem-count'>19K+</div>
            <div className='tf-infoItem-label'>Artists</div>
          </div>
          <div className='tf-left-infoItem absolute-center'>
            <div className='tf-infoItem-count'>420K+</div>
            <div className='tf-infoItem-label'>Community</div>
          </div>
        </div>
      </div>
      <div className='tf-right'>
        <div className='tf-r-bg-blob'></div>
        <div className='tf-right-diamond'>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-banner' src='https://c.tenor.com/ex0ssYC5xdEAAAAd/metakongz-nft.gif'></img>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-banner' src='https://c.tenor.com/uHVmd0uBuU0AAAAC/bored-ape-yacht-club-nft.gif'></img>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-banner' src='https://c.tenor.com/1i16nMrNj88AAAAC/nft-marketing-nft-gorillas.gif'></img>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-banner' src='https://c.tenor.com/18a0dELaS7kAAAAC/artsymind-rtfkt.gif'></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFold