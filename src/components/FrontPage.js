import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import front from '../pictures/front.jpg'
import What from './What';
import When from './When';
import How from './How';
import Who from './Who';
import Footer from './Footer';
import { Paper } from '@material-ui/core';
import logo from '../pictures/logo.png';
import beer from '../pictures/beer.jpg';




const useStyles = makeStyles((theme) => ({


    //Jos mobiililla, laitetaan sinne ilman backgroundia

    div: {
        [theme.breakpoints.up('md')]: {
            backgroundImage: "url(" + front + ")",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: '200vh',
            backgroundRepeat: 'no-repeat',
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
        [theme.breakpoints.up('md')]: {
            backgroundImage: "url(" + front + ")",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: '200vh',
            backgroundRepeat: 'no-repeat',
        },
        [theme.breakpoints.up('lg')]: {
            backgroundImage: "url(" + beer + ")",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: '200vh',
            backgroundRepeat: 'no-repeat',
        },
    },
    test: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            paddingBottom: 350,
        },
        [theme.breakpoints.up('xl')]: {
            paddingBottom: 500,
        }
    },

    header: {
        fontSize: 10,
        backgroundColor: 'white',
        borderRadius: 100,
        marginTop: 10

    },
    logo: {
        width: 300,
        height: 300
    },
}));




export default function FrontPage() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.div}>

                <div className={classes.test}>
                    <Paper className={classes.header}>
                        <img className={classes.logo} src={logo} alt='logo'></img>
                    </Paper>
                    <What />
                    <How />
                </div>

            </div>
            <div className={classes.div2}>
                <div className={classes.test}>
                    <When />
                    <Who />
                </div>
            </div>
            <Footer />
        </div>
    );
}