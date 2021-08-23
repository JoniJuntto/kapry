import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import front from '../pictures/front.jpg'
import What from './What';
import When from './When';
import How from './How';
import { Typography } from '@material-ui/core';
import logo from '../pictures/logo.png';

const useStyles = makeStyles({
    div: {
        backgroundImage: "url(" + front + ")",
        backgroundPosition: 'center 60%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: '200vh',
        display: 'flex',
        justifyContent: 'center',
        minWidth: 320,
        position: 'relative'

    },
    test:{
        height: 3000,
    },
    header:{
        fontSize: 10
    },
    logo:{
        width: 300,
        height: 300
    }
  })

  

export default function FrontPage(){

    const classes = useStyles();

    return(
        <div className={classes.div}>
            
            <div className={classes.test}>
            <div className={classes.header}>
                <img className={classes.logo} src={logo} alt='logo'></img>
            </div>
                <What />
                <When />
                <How />
            </div>
        </div>
    );
}