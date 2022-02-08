import React, { useEffect } from 'react';
import classes from './clientWithComments.module.css';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from '../DataContainer/DataFile';

import Rating from '@material-ui/lab/Rating';
import BannerInfo from '../bannerInfo/BannerInfo';

import AOS from "aos";
import "aos/dist/aos.css";

const ClientWithComments = () => {

    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: "ease-in-sine",
          delay: 100,
        });
      });

    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
      };

    return (
        <div className={classes.cwc__Container}>
            
            <div className={classes.testimonial__Container}>
                <div className={classes.testinomial__card_Wrapper}>
                    <Slider {...settings}>
                        {testimonialData.map((data, i) => (
                            <div className={classes.testimonial__Card}>
                                <div className={classes.testimonial__Card__text}>
                                    {data.clientMessage}
                                </div>
                                <span className={classes.sprateLine}></span>
                                <span>
                                    <Rating name="size-small" readOnly value={data.clientRate} defaultValue={0} precision={0.5} size="small" />
                                </span>
                                <div className={classes.testimonial__Card__name}>
                                    <span className={classes.testimonial_Card_ClientName}>{data.clientName}</span>
                                    <span className={classes.testimonial_Card_ClientPosition}>{data.clientPosition}</span>
                                    <span className={classes.testimonial_Card_ClientCompanyName}>{data.clientCompanyName}</span>
                                </div>
                            </div>    
                            ))}
                    </Slider>
                </div>
            </div>

            <div data-aos="fade-up">
                <BannerInfo />
            </div>

        </div>
    )
}

export default ClientWithComments