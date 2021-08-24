import { Paper } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
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
        [theme.breakpoints.down('sm')]:{
            width: '80%'
        },
        marginTop:100,
        width:'70%',
        height:450,
        opacity: 0.8,
        backgroundColor:'black',
        
    }
}));

export default function Who(){

    const classes = useStyles();

    return(
        <Paper className={classes.paper}>
            <h1 className={classes.h1}>Kuka voi liittyä?</h1>
            <Typography className={classes.text}>
                Voit hakea jäseneksi, jos olet korkeakouluopiskelija/entinen korkeakouluopiskelija
                ja täysi-ikäinen. Hakeminen tapahtuu sähköpostitse hallitus@kapry.net.
            </Typography>
        </Paper>

    );
}