import React, { useState } from 'react'
import classes from './questionanswer.module.css';

import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

import { QAData } from '../DataContainer/DataFile';

const QuestionAnswer = () => {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return (
        <div className={classes.questionAnswer__Container}>
            <div className={classes.sectionHeading}>
                <h3>Do You Have <span>Questions</span></h3>
            </div>

            <div className={classes.questionAnswer__QA__Container}>
              {QAData.map((itmQA) => (

                <QuestionAnswerChild  key={itmQA.id}
                                      itmQAData={itmQA}
                                      panelHandler={handleChange}
                                      expandedHK={expanded} />
              ))}
            </div>
        </div>
    );
};

const QuestionAnswerChild = ({ itmQAData, panelHandler, expandedHK }) => {
  return (
            <Accordion expanded={expandedHK === `${itmQAData.id}`} onChange={panelHandler(`${itmQAData.id}`)}
              style={{ border: '0px solid blue', marginBottom: '0.2rem', opacity: '0.9', padding: '1rem'}}
            >
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }} style={{ fontWeight: '700', marginRight: '10px' }}>
                  {itmQAData.type}
              </Typography>
              <Typography sx={{ color: 'text.secondary'}} style={{ fontWeight: '400', fontSize: '16px' }}>{itmQAData.question}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ border: '0px solid green', padding: '10px 50px' }}>
              <Typography style={{ border: '0px solid green', fontSize: '15px' }}>
                {itmQAData.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
};


export default QuestionAnswer
