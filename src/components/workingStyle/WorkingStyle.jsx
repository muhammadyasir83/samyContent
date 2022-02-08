import React, { useEffect } from 'react';
import classes from './workingStyle.module.css';
import { WorkingStyleData } from '../DataContainer/DataFile';
import AOS from "aos";
import "aos/dist/aos.css";

const WorkingStyle = () => {

    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 1000,
          easing: "ease-in-sine",
          delay: 100,
        });
      });


    return (
        <div className={classes.workingStyleContainer}>
            <div className={classes.sectionHeading}>
                <h3>Quality content for your business or academic in a few click</h3>
                <h5>Sing-up and request content in <span>under 30 minutes</span></h5>
            </div>
            <div className={classes.workingStyleCard__Container} data-aos="flip-down">
                {WorkingStyleData.map((wsItem) => (
                    <WorkingStyleChild key={wsItem.id} itmData={wsItem}/>
                ))}
            </div>
            <div className={classes.wsSignupBtn__Container}>
                <span className={classes.wsSignupBtn}><a href="#">Sign up</a></span>
            </div>
        </div>
    )
}

const WorkingStyleChild = ({ itmData }) => {
    return (
        <div className={classes.workingStyle__Card}>
                <h3>{itmData.step}</h3>
                <h4>{itmData.stepDescp}</h4>
                <img src={itmData.wsImg} alt="imG" />
                <p>{itmData.text}</p>
        </div>
    );
};


export default WorkingStyle