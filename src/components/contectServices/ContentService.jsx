import React, { useEffect } from 'react';
import classes from './ContentService.module.css';
import { contentServiceData } from '../DataContainer/DataFile';
import AOS from "aos";
import "aos/dist/aos.css";


const ContentService = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  });


  return (
    <div className={classes.contentService__Container}>
    
        <div className={classes.sectionHeading}>
            <h3>Built For Your Business</h3>
            <h5>Our flexible platform offers powerful tools and expert writers that
              enhance any <span>Business</span> and <span>Academic</span> content process.</h5>
        </div>
        
        <div className={classes.contentService__Card__Container} data-aos="flip-up">
          {contentServiceData.map((csData) => (
            <ContentServiceChild key={csData.id} csDataItm={csData}/>
          ))}
        </div>

    
    </div>
  );
};


const ContentServiceChild = ({csDataItm}) => {
  return (
    <div className={classes.csCard__Wrapper}>
      
      <div className={classes.csCard__Wrapper__img}>
        <img src={csDataItm.img} alt="Content Service Img" />
      </div>
      
      <div className={classes.csCard__Wrapper__text}>
        <h3>{csDataItm.heading}</h3>
        <p>{csDataItm.description}</p>
      </div>

    </div>

  )
}


export default ContentService;
