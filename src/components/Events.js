import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import beer from '../pictures/beer.jpg';
import { Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    
    div:{
        backgroundImage: "url(" + beer + ")",
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: '230vh',
        backgroundRepeat: 'no-repeat',
        height: 3000
        
    },
    items:{
        display: 'flex',
        justifyContent: 'center'
    },
    header:{
        fontSize: 90,
        color: 'white',
        marginTop: 100,
    },
    eventit:{
        marginTop: '30vh',
        flexDirection: 'column'
    },
    event:{
        width: '100vh',
        height: '60vh',
        marginTop: '6vh',
        opacity: 0.8,
        backgroundColor: 'black',
        color: 'white',
        
    },
    textHeader:{
        fontSize: 60,
        padding: 50
    },
    text:{
        fontSize: 25,
        padding: 50
    }
    }));

export default function Events(){

    const classes = useStyles();
    
    //Tähän kaikkein järkevin ois tehdä backend, johon syöttää eventit mut perkele vedetään kovakoodattuna 
    return(
        <div className={classes.div}>
            <div className={classes.items}>
                <Typography className={classes.header}>Events</Typography>
                <div className={classes.eventit}>
                    <Paper className={classes.event}>
                        <Typography className={classes.textHeader}>
                            Eventti numero 1.
                        </Typography>
                        <Typography className={classes.text}>
                            Leipätekstiä jostain eventistä, milloin se tapahtuu ja mitä siellä tapahtuu ;)
                        </Typography>
                    </Paper>
                </div>
            </div>
        </div>
    );
}