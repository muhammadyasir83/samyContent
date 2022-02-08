import React from "react";
import { Grid, Typography, Box, TextField, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import { Facebook, YouTube, Instagram, WhatsApp, ImportContacts, Phone } from '@material-ui/icons'
import { Mail } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({

  footerTextBox : {
    
    padding: '3px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
  },

  socialMediaIcon : {
    cursor: 'pointer',
    '& span': {
      marginRight: '10px',
    }
  },

  bkIcon: {
    transition: 'all 0.5s ease',
    color: '#FFBA60',
    '&:hover': {
      opacity: '0.5'
    }
  },

  phIcon: {
    transition: 'all 0.5s ease',
    color: '#FFBA60',
    '&:hover': {
      opacity: '0.5'
    }
  },

  fbIcon : {
    transition: 'all 0.5s ease',
    color: '#3b5998',
    '&:hover': {
      opacity: '0.5'
    }
  },
  ytIcon: {
    transition: 'all 0.5s ease',
    color: '#cd201f',
    '&:hover': {
      opacity: '0.5'
    }
  },
  instIcon: {
    transition: 'all 0.5s ease',
    color: '#E4405F',
    '&:hover': {
      opacity: '0.5'
    }
  },
  whatIcon: {
    transition: 'all 0.5s ease',
    color: '#43d854',
    '&:hover': {
      opacity: '0.5'
    }
  }

}))



const Footer = () => {

  const classes = useStyles();

  return (
    <div>
      
      <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
        {/* First Column */}
        <Grid item md={3} style={{ color: '#f9fafd', opacity: '0.8'}}>
          <Box p={3}>
            <Grid container direction="row" spacing={2}  className={classes.footerTextBox}>
              <Grid item sm={12} style={{ border: '0px solid green', textAlign: 'center'}}>
                <Typography variant="h5">IMG</Typography>
              </Grid>

              <Grid item sm={12}>
                <Typography variant="body2">
                  The Typography component uses the variantMapping prop to associate a UI variant with a semantic 
                  element. It's important to realize that the style of a typography component is independent from 
                  the semantic underlying element. In addition to using the default typography variants, 
                  you can add custom ones, or disable any you don't need. See the Adding and disabling 
                  variants example for more info.
                </Typography>
              </Grid>

              <Grid item sm={12}>
                <Typography variant="h5">
                  Follow us
                </Typography>
              </Grid>

              <Grid item sm={12} className={classes.socialMediaIcon}>
                <span className={classes.fbIcon}><Facebook /></span>  
                <span className={classes.ytIcon}><YouTube /></span>
                <span className={classes.instIcon}><Instagram /></span>
                <span className={classes.whatIcon}><WhatsApp /></span>
              </Grid>

            </Grid>

          </Box>
        </Grid>

        {/* Second Column */}
        <Grid item md={3} style={{ border: '0px solid red', color: '#f9fafd', opacity: '0.8' }}>

          <Box p={1}>
            <Grid container direction="row" style={{ border: '0px solid green'}} spacing={1}>
              <Grid item xs={2} sm={2} style={{ border: '0px solid pink', textAlign: 'center'}}>
                <Typography variant="body2">
                <span className={classes.bkIcon}><ImportContacts /></span>  
                </Typography>
              </Grid>
              <Grid item xs={10} sm={10} style={{ border: '0px solid pink'}}>
                
                  <Grid container direction="row" style={{ border: '0px solid green'}}>
                    <Typography variant="body1">
                      AL-Khobar, Saudi Arabia
                    </Typography>
                  </Grid>
                  <Grid container direction="row" style={{ border: '0px solid green'}}>
                    <Typography variant="body2">
                      31952, Shumalia.
                    </Typography>
                  </Grid>
                
              </Grid>
            </Grid>
          </Box>

          <Box p={1}>
            <Grid container direction="row" style={{ border: '0px solid green'}} spacing={1}>
            <Grid item xs={12} sm={12} style={{ border: '0px solid pink'}}>
                <Typography variant="h5">
                  Usefull Links
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box p={1}>
            <Grid container direction="row" style={{ border: '0px solid green'}} spacing={1}>
              <Grid item sm={4}>
                <Typography variant="body2">
                  About us
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="body2">
                  Contact us
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="body2">
                  Services
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="body2">
                  Blogs
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="body2">
                  Projects
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="body2">
                  Testimonials
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="body2">
                  Our Teams
                </Typography>
              </Grid>
            </Grid>
          </Box>

        </Grid>




        {/* Third Column */}
        <Grid item md={3} style={{ border: '0px solid blue', color: '#f9fafd', opacity: '0.8' }}>
        
        <Box p={1}>
            <Grid container direction="row" style={{ border: '0px solid green'}} spacing={1}>
              <Grid item xs={2} sm={2} style={{ border: '0px solid pink', textAlign: 'center'}}>
                <Typography variant="body2">
                  <span className={classes.phIcon}><Phone /></span>
                </Typography>
              </Grid>
              <Grid item xs={10} sm={10} style={{ border: '0px solid pink'}}>
                
                  <Grid container direction="row" style={{ border: '0px solid green'}}>
                    <Typography variant="body1">
                      00966 599200952
                    </Typography>
                  </Grid>
                  <Grid container direction="row" style={{ border: '0px solid green'}}>
                    <Typography variant="body2">
                      Give us a call.
                    </Typography>
                  </Grid>
                
              </Grid>
            </Grid>
          </Box>

          <Box p={1} style={{ border: '0px solid blue'}}>
            <Grid container direction="row" style={{ border: '0px solid green'}} spacing={1}>
            
              <Grid item xs={12} sm={12} style={{ border: '0px solid blue'}}>
                <Typography variant="h5">
                  Subscribe
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ border: '0px solid blue'}}>
                <Typography variant="body2">
                  Reference site about Lorem Ipsum. Giving information on its origins, as well.
                </Typography>
              </Grid>

            </Grid>
          </Box>
          
          <Box component="form" noValidate autoComplete="off" p={1} style={{ border: '0px solid green' }}>
            <Grid item container direction="row" spacing={1} justifyContent="center" alignItems="center">
              <Grid item xs={8} sm={8} md={8} lg={8} style={{ border: '0px solid green' }}>
                <TextField id="emailSubscribe" color="primary" label="E-mail Address" focused variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Button type="submit" variant="contained" color="primary" endIcon={<Mail />}>Subscribe</Button>
              </Grid>
            </Grid>  

          </Box>
        </Grid>

      </Grid>


      <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center" style={{backgroundColor: '#1e3c72', color: '#f9fafd'}}>

            <Grid item xs={12} sm={6} style={{ border: '0px solid blue', opacity: '0.5'}}>
              <Typography variant="body2" style={{ textAlign: 'center' }}>
                Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2022, All Right Reserved SAMY
              </Typography>
            </Grid>

            <Grid item container xs={12} sm={6} justifyContent="center" style={{ border: '0px solid blue', textAlign: 'center', opacity: '0.5'}}>
              <Grid xs={3} sm={2}>
                <Typography variant="body2" style={{ border: '0px solid green', textAlign: 'center' }}>
                  Home
                </Typography>
              </Grid>
              <Grid xs={3} sm={2}>
                <Typography variant="body2" style={{ border: '0px solid green', textAlign: 'center' }}>
                  Terms
                </Typography>
              </Grid>
              <Grid xs={3} sm={2}>
                <Typography variant="body2" style={{ border: '0px solid green', textAlign: 'center' }}>
                  Privacy Policy
                </Typography>
              </Grid>
              <Grid xs={3} sm={2}>
                <Typography variant="body2" style={{ border: '0px solid green', textAlign: 'center' }}>
                  Contact
                </Typography>
              </Grid>
            </Grid>

        

      </Grid>


    </div>
  );
};

export default Footer;
