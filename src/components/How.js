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

export default function How(){

    const classes = useStyles();

    return(
        <Paper className={classes.paper}>
            <h1 className={classes.h1}>Mitä KAP ry. tekee?</h1>
            <Typography className={classes.text}>
                KAP ry. järjestää tapahtumia, 
                joiden teemat liikkuvat opiskelun ja juomien panemisen ympärillä. 
                Lisätietoja tapahtumista löydät tapahtumasivulta.
            </Typography>
        </Paper>

    );
}