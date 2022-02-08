import React from 'react';
import './contactus.css';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

const ContactUs = (props) => {

    const { handleCloseDialog, handleOpenDialog } = props;

  return (
        <Dialog onClose={handleCloseDialog} open={handleOpenDialog}>
            <DialogTitle>Contact Us</DialogTitle>
            <h2>Form here</h2> 
        </Dialog>
  );
};

export default ContactUs;
