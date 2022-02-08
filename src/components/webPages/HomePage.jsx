import React from 'react';
import classes from './homepage.module.css';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import WorkingStyle from '../workingStyle/WorkingStyle';
import WhyHireOurService from '../whyHireOurService/WhyHireOurService';
import QuestionAnswer from '../questionAnswer/QuestionAnswer';
import BannerInfo from '../bannerInfo/BannerInfo';
import ClientWithComments from '../clientWithComments/ClientWithComments';
import Footer from '../footer/Footer';
import ProjectSummaryBar from '../projectSummaryBar/ProjectSummaryBar';
import ContentService from '../contectServices/ContentService';


const HomePage = () => {
    return (
        <>
            <div className={classes.homePage__hero__Container}>
                <Navbar />
                <Hero />
            </div>

            <div className={classes.other__ssesion}>
                <ContentService />
                <WorkingStyle />
                <WhyHireOurService />
                <QuestionAnswer />
                {/* <div className={classes.bannerInfor__Container}>
                    <BannerInfo />
                </div> 
                */}
                <div>
                    <ProjectSummaryBar />
                </div>
                <ClientWithComments />
            </div>
            
            <div className={classes.other__footer}>
                <Footer />
            </div>
            
        </>
    );
};

export default HomePage
