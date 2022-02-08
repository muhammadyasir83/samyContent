import React from 'react';
import classes from './bannerInfo.module.css';

const BannerInfo = () => {

    return (
        <div className={classes.BannerInfo__Container}>
            <h3>What Are You Waiting For?</h3>
            <p>Order Now to Get Your <span>Content in 2 Days!</span></p>
            <span className={classes.bannerOrderBtn}><a href="#">Sign up</a></span>
        </div>
    )
}

export default BannerInfo
