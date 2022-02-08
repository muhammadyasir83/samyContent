import React from 'react'
import classes from './whyhireourservice.module.css';

// import Timeline from '@mui/lab/Timeline';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/AccessAlarm';
import { WhyHireOurServiceData } from '../DataContainer/DataFile';


const WhyHireOurService = () => {
    return (
        <div className={classes.whyHireOurService__Container}>
            <div className={classes.sectionHeading}>
                <h3>Why Hire Our <span>Content</span> Services?</h3>
            </div>

            <div>
            <Timeline position="alternate">

                {WhyHireOurServiceData.map((whosItem) => (
                    <WhyHireOurServiceChild key={whosItem.id} itmData={whosItem}/>
                ))}
                
            </Timeline>
        </div>

    </div>
    );
};



const WhyHireOurServiceChild = ({ itmData }) => {
    return (
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            className={classes.whos__img_container}
            >
            <img src={itmData.whosImg} alt="whos_img" className={classes.whos__img} />
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />

            <TimelineDot color={itmData.iconColor}>
                <FastfoodIcon />
            </TimelineDot>

            <TimelineConnector />

            </TimelineSeparator>
            
            <TimelineContent sx={{ py: '12px', px: 2 }} style={{ border: '0px solid green', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div className={classes.whos__text}>
                <Typography variant="h6" component="span">
                    {itmData.heading}
                </Typography>
                    <p style={{ width: '70%', border: '0px solid green' }}>
                        {itmData.text}
                    </p>
                </div>                    
            </TimelineContent>
        </TimelineItem>
    );
};


export default WhyHireOurService
