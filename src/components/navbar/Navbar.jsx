import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={classes.navContainer}>
            <div className={classes.navWrapper}>
                <div className={classes.navLogo}>
                    <h2>SAMY</h2>
                </div>
                <div className={classes.navLinks}>
                    <p><a href="#Home">Home</a></p>
                    <p><a href="#Home">Services</a></p>
                    <p><a href="#Home">Testimonial</a></p>
                    <p><a href="#Home">About us</a></p>
                </div>
                <div className={classes.navContactus}>
                    <span className={classes.bannerOrderBtn}>
                        <a href="#">Contact us</a>
                    </span>
                </div>

                
            </div>
        </div>
    )
}

export default Navbar
