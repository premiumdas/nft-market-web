import React from 'react';
import Button from '../../common/Button/Button';
import "./TopFold.css";

const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
      <div className='tf-left'>
        <div className='tf-heading'>
          Discover, collect & sell{' '} 
          <span className='header-gradient'>Extraordinary </span>
          NFTs
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
      <div className='tf-right'></div>
    </div>
  );
};

export default TopFold