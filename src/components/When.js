import { Paper } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    text:{
        color:'white',
        opacity:1,
        margin: 20,
    },
    h1:{
        color: 'white',
        padding: 20,
    },
    paper:{
        marginTop:100,
        width:650,
        height:450,
        opacity: 0.8,
        backgroundColor:'black',
        
    }
})

export default function When(){

    const classes = useStyles();

    return(
        <Paper className={classes.paper}>
            <h1 className={classes.h1}>Milloin?</h1>
            <Typography className={classes.text}>
                Seuraavat tapahtumat löydätte tapahtumakalenterista, täältä.
            </Typography>
        </Paper>

    );
}