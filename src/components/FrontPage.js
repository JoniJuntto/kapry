import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import front from '../pictures/front.jpg'
import What from './What';
import When from './When';
import How from './How';
import { Paper, Typography } from '@material-ui/core';
import logo from '../pictures/logo.png';
import malt from '../pictures/malt.jpg';
import beer from '../pictures/beer.jpg';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';


const useStyles = makeStyles((theme) => ({


    //Jos mobiililla, laitetaan sinne vain yksi background kuva
    mobileHelper:{
        [theme.breakpoints.down('sm')]:{
            backgroundImage: "url(" + front + ")",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: '350vh',
            backgroundRepeat: 'no-repeat',
        },
        [theme.breakpoints.up('md')]:{
            backgroundImage: "url(" + front + ")",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: '350vh',
            backgroundRepeat: 'no-repeat',
        },
    },
    
    div: {
        
        

        [theme.breakpoints.down('sm')]:{
           
        },
        [theme.breakpoints.up('md')]:{
          
        },
        [theme.breakpoints.up('lg')]: {
            backgroundImage: "url(" + front + ")",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: '200vh',
            backgroundRepeat: 'no-repeat',
          },
        
    },
    div2: {
        [theme.breakpoints.down('sm')]:{
           
        },
        [theme.breakpoints.up('md')]:{
        
        },
        [theme.breakpoints.up('lg')]: {
            backgroundImage: "url(" + beer + ")",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: '200vh',
            backgroundRepeat: 'no-repeat',
          },
    },
    test:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 350,
    },
    
    header:{
        fontSize: 10,
        backgroundColor:'white',
        borderRadius: 100,
        marginTop: 10

    },
    logo:{
        width: 300,
        height: 300
    },
    malt:{
        width: 300,
        height: 300
    }
  }));


  

export default function FrontPage(){

    const classes = useStyles();

    return(
        <div className={classes.mobileHelper}>
            <div className={classes.div}>
                
                <div className={classes.test}>
                    <Paper className={classes.header}>
                        <img className={classes.logo} src={logo} alt='logo'></img>
                    </Paper>
                    <What />
                    <When />
                    
                </div>

            </div>
            <div className={classes.div2}>
                <div className={classes.test}>
            <How />
            </div>
            </div>
        </div>
    );
}