import { Paper } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core';
import ListComponent from './ListComponent';

const useStyles = makeStyles((theme)=>({
    h1:{
        color: 'white',
        padding: 20,
    },
    paper:{
        opacity: 0.8,
        backgroundColor:'black',
        padding: '10vh',
        width: '65%'
    },
}));

export default function When(){

    const classes = useStyles();

    return(
        
            <Paper className={classes.paper}>
                <div className={classes.div}>
                    <h1 className={classes.h1}>Milloin?</h1>
                    <ListComponent className={classes.list} />
                </div>
            </Paper>
     

    );
}