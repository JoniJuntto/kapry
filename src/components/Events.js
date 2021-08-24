import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import beer from '../pictures/beer.jpg';
import { Paper, Typography } from '@material-ui/core';
import { whileStatement } from '@babel/types';
import logo from '../pictures/logo.png'

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
        justifyContent: 'center',
        display: 'flex',
        
    },
    header:{
        fontSize: 90,
        color: 'white',
        marginTop: 100,
        position:'fixed'
        
    },
    logo:{
        width: 200,
        height: 200
    },
    eventit:{
        marginTop: '30vh',
        flexDirection: 'column'
    },
    event:{
        width: '100vh',
        height: '60vh',
        marginTop: '6vh',

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
                        <Typography>
                            Eventti numero 1.
                        </Typography>
                    </Paper>
                    <Paper className={classes.event}>
                        <Typography>
                            Eventti numero 2.
                        </Typography>
                    </Paper>
                    <Paper className={classes.event}>
                        <Typography>
                            eventti numero 3.
                        </Typography>
                    </Paper>
                </div>
            </div>
        </div>
    );
}