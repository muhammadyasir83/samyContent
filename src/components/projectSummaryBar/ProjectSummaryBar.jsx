import React from 'react';
import classes from './ProjectSummaryBar.module.css';
import { projectSummaryData } from '../DataContainer/DataFile';

const ProjectSummaryBar = () => {
    return (
        <div className={classes.projectSummary__Container}>
            <div className={classes.projectSummary__Wrapper}>
                {projectSummaryData.map((dATA) => (
                    <ProjectSummaryChild key={dATA.id} dATAiTEM={dATA} />
                ))}
            </div>
        </div>
    );
};

const ProjectSummaryChild = ({ dATAiTEM }) => {
    return (
        <div className={classes.projectSummary__Card}>
            <h3>{dATAiTEM.descp}</h3>
            <img src={dATAiTEM.img} alt="Project Summary IMG" />
            <h5>{dATAiTEM.text}</h5>
        </div>
    );
};

export default ProjectSummaryBar
