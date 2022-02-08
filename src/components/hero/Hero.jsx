import React, { useEffect } from 'react';
import classes from './Hero.module.css';
import ImgFile from '../../assets/HeroPhotos/Img_002.svg';
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: "ease-in-sine",
          delay: 100,
        });
      });


    return (
        <div className={classes.heroContainer}>
            <div className={classes.heroWrapper}>

                <div className={classes.heroText} data-aos="fade-right">
                    <h1>Scale your content creation effortlessly.</h1>
                    <h3>Get blog posts, social posts, email copy & more from the top 1% of writers. Scale up quickly and with ease.</h3>
                    <div>
                        <span className={classes.heroButton}><a href="#">Get Started</a></span>
                        <span className={classes.heroButton}><a href="#">Request Demo</a></span>
                    </div>
                </div>
                <div className={classes.heroLogo} data-aos="fade-left">
                    <img src={ImgFile} alt="abc"/>
                </div>

            </div>
            
        </div>
    )
}

export default Hero
