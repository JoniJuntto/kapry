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

export default function What(){

    const classes = useStyles();

    return(
        <Paper className={classes.paper}>
            <h1 className={classes.h1}>Mikä on KAP ry. ?</h1>
            <Typography className={classes.text}>
                Yhdistyksen tarkoituksena on koota yhteen samanhenkisiä opiskelijoita jakaen
                tietoa ja taitoa oluen ja muiden käymisteitse valmistettujen juomien panemisesta
                kansanperinteitä kunnioittaen.
            </Typography>
        </Paper>

    );
}