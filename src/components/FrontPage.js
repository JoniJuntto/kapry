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

const useStyles = makeStyles({

    
    div: {
        backgroundImage: "url(" + front + ")",
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: '350vh',
        backgroundRepeat: 'no-repeat',
        
    },
    div2: {
        backgroundImage: "url(" + beer + ")",
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: '350vh',
        backgroundRepeat: 'no-repeat',
    },
    test:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 100
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
  })


  

export default function FrontPage(){

    const classes = useStyles();

    return(
        <div>
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